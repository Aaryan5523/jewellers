import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'data');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');

// Ensure data directory exists
async function ensureDataDir() {
    try {
        await fs.access(DATA_DIR);
    } catch {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }
}

// Generic JSON file operations
async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return null;
        }
        throw error;
    }
}

async function writeJSON(filename, data) {
    await ensureDataDir();
    await fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8');
}

// Product operations
export async function getProducts() {
    const data = await readJSON(PRODUCTS_FILE);
    return data || { products: [], nextId: 1 };
}

export async function addProduct(product) {
    const data = await getProducts();
    const newProduct = {
        ...product,
        id: data.nextId,
        createdAt: new Date().toISOString()
    };
    data.products.push(newProduct);
    data.nextId += 1;
    await writeJSON(PRODUCTS_FILE, data);
    return newProduct;
}

export async function updateProduct(id, updates) {
    const data = await getProducts();
    const index = data.products.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return null;
    }

    data.products[index] = {
        ...data.products[index],
        ...updates,
        id: data.products[index].id, // Preserve ID
        createdAt: data.products[index].createdAt, // Preserve creation date
        updatedAt: new Date().toISOString()
    };

    await writeJSON(PRODUCTS_FILE, data); // Write the full data object
    return data.products[index];
}

export async function deleteProduct(id) {
    const data = await getProducts();
    const index = data.products.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return false;
    }

    data.products.splice(index, 1);
    await writeJSON(PRODUCTS_FILE, data);
    return true;
}

// Contact operations
export async function getContacts() {
    const data = await readJSON(CONTACTS_FILE);
    return data || { contacts: [], nextId: 1 };
}

export async function addContact(contact) {
    const data = await getContacts();
    const newContact = {
        ...contact,
        id: data.nextId,
        status: 'new',
        createdAt: new Date().toISOString()
    };
    data.contacts.push(newContact);
    data.nextId += 1;
    await writeJSON(CONTACTS_FILE, data);
    return newContact;
}

export async function deleteContact(id) {
    const data = await getContacts();
    const index = data.contacts.findIndex(c => c.id === parseInt(id));

    if (index === -1) {
        return false;
    }

    data.contacts.splice(index, 1);
    await writeJSON(CONTACTS_FILE, data);
    return true;
}

// Admin operations
export async function getAdmin() {
    return await readJSON(ADMIN_FILE);
}

export async function createAdmin(adminData) {
    await writeJSON(ADMIN_FILE, adminData);
}
