import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initializeData() {
    console.log('🚀 Initializing data files...\n');

    const dataDir = path.join(__dirname, '..', 'data');

    // Create data directory if it doesn't exist
    try {
        await fs.access(dataDir);
        console.log('✅ Data directory already exists');
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
        console.log('✅ Created data directory');
    }

    // Initialize products.json - empty for now, will be populated via admin panel
    const productsFile = path.join(dataDir, 'products.json');
    try {
        await fs.access(productsFile);
        console.log('✅ Products file already exists');
    } catch {
        const productsJson = {
            products: [],
            nextId: 1
        };
        await fs.writeFile(productsFile, JSON.stringify(productsJson, null, 2));
        console.log(`✅ Created products.json`);
    }

    // Initialize contacts.json
    const contactsFile = path.join(dataDir, 'contacts.json');
    try {
        await fs.access(contactsFile);
        console.log('✅ Contacts file already exists');
    } catch {
        const contactsJson = {
            contacts: [],
            nextId: 1
        };
        await fs.writeFile(contactsFile, JSON.stringify(contactsJson, null, 2));
        console.log('✅ Created contacts.json');
    }

    // Initialize admin.json with hashed password
    const adminFile = path.join(dataDir, 'admin.json');
    try {
        await fs.access(adminFile);
        console.log('✅ Admin file already exists');
    } catch {
        const username = process.env.ADMIN_USERNAME || 'admin';
        const password = process.env.ADMIN_PASSWORD || 'admin123';
        const passwordHash = await bcrypt.hash(password, 10);

        const adminData = {
            username,
            passwordHash,
            email: 'admin@jayeshjewellers.com',
            createdAt: new Date().toISOString()
        };

        await fs.writeFile(adminFile, JSON.stringify(adminData, null, 2));
        console.log('✅ Created admin.json');
        console.log(`\n📝 Admin Credentials:`);
        console.log(`   Username: ${username}`);
        console.log(`   Password: ${password}`);
        console.log(`   (Change these in .env file)\n`);
    }

    console.log('\n✨ Data initialization complete!');
    console.log('\n💡 Next steps:');
    console.log('   1. Start the backend server: npm run server');
    console.log('   2. Visit admin login at: http://localhost:5173/admin/login');
    console.log('   3. Login with credentials above\n');
}

initializeData().catch(err => {
    console.error('❌ Error initializing data:', err);
    process.exit(1);
});
