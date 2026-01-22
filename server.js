import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import authMiddleware from './middleware/auth.js';
import * as db from './utils/fileDB.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed!'));
    }
});

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your Gmail
        pass: 'your-app-password' // Use App Password from Google Account
    }
});

// ==================== ADMIN ROUTES ====================

// Admin login
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await db.getAdmin();

        if (!admin) {
            return res.status(404).json({ error: 'Admin not configured. Run initialization script.' });
        }

        if (username !== admin.username) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValidPassword = await bcrypt.compare(password, admin.passwordHash);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { username: admin.username, email: admin.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        res.json({
            success: true,
            token,
            admin: {
                username: admin.username,
                email: admin.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Verify token
app.get('/api/admin/verify', authMiddleware, (req, res) => {
    res.json({ success: true, admin: req.admin });
});

// ==================== PRODUCT ROUTES ====================

// Get all products (public)
app.get('/api/products', async (req, res) => {
    try {
        const data = await db.getProducts();
        res.json(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Create product (protected)
app.post('/api/products', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { title, price, category, description, details } = req.body;

        // Parse details if it's a JSON string
        let parsedDetails = details;
        if (typeof details === 'string') {
            try {
                parsedDetails = JSON.parse(details);
            } catch {
                parsedDetails = [details];
            }
        }

        const product = {
            title,
            price,
            category,
            description,
            details: parsedDetails || [],
            image: req.file ? `/uploads/${req.file.filename}` : ''
        };

        const newProduct = await db.addProduct(product);
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// Update product (protected)
app.put('/api/products/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { title, price, category, description, details } = req.body;

        let parsedDetails = details;
        if (typeof details === 'string') {
            try {
                parsedDetails = JSON.parse(details);
            } catch {
                parsedDetails = [details];
            }
        }

        const updates = {
            title,
            price,
            category,
            description,
            details: parsedDetails || []
        };

        // Add image if new one is uploaded
        if (req.file) {
            updates.image = `/uploads/${req.file.filename}`;
        }

        const updatedProduct = await db.updateProduct(req.params.id, updates);

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ success: true, product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
});

// Delete product (protected)
app.delete('/api/products/:id', authMiddleware, async (req, res) => {
    try {
        const deleted = await db.deleteProduct(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ success: true, message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

// ==================== CONTACT ROUTES ====================

// Submit contact form (public)
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Save to database
        await db.addContact({ firstName, lastName, email, message });

        // Email to your inbox
        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to: 'Dhruvraninga37@gmail.com',
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        // Confirmation email to user
        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to: email,
            subject: 'We received your message - Jayesh Jewellers',
            html: `
                <h2>Thank You!</h2>
                <p>Dear ${firstName},</p>
                <p>We have received your message and will get back to you shortly.</p>
                <p>Best regards,<br>Jayesh Jewellers Team</p>
            `
        });

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Get all contacts (protected)
app.get('/api/contacts', authMiddleware, async (req, res) => {
    try {
        const data = await db.getContacts();
        res.json(data);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
});

// Delete contact (protected)
app.delete('/api/contacts/:id', authMiddleware, async (req, res) => {
    try {
        const deleted = await db.deleteContact(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Contact not found' });
        }

        res.json({ success: true, message: 'Contact deleted' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ error: 'Failed to delete contact' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
