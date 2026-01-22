// Quick test script to verify the login endpoint works
const https = require('http');

const data = JSON.stringify({
    username: 'admin',
    password: 'admin123'
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/admin/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('Testing login endpoint...\n');

const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}\n`);

    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        console.log('Response Body:', body);
        try {
            const jsonResponse = JSON.parse(body);
            console.log('\n✅ Login successful!');
            console.log('Token:', jsonResponse.token?.substring(0, 20) + '...');
            console.log('Admin:', jsonResponse.admin);
        } catch (e) {
            console.log('\n❌ Login failed');
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Error:', error.message);
});

req.write(data);
req.end();
