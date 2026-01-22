# Admin Login Debugging Guide

## Quick Checklist

✅ **Backend Server Running**: Your server should be running on port 5000
- Run: `npm run server`
- You should see: "Server running on port 5000"

✅ **Data Files Created**: Check these files exist:
- `data/admin.json` - Contains hashed password
- `data/products.json` - Empty products list  
- `data/contacts.json` - Empty contacts list

✅ **Environment Variables**: Check `.env` file has:
```
JWT_SECRET=jayesh-jewellers-secret-key-2026
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

## Test Login in Browser

1. **Open Login Page**: http://localhost:5173/admin/login

2. **Enter Credentials**:
   - Username: `admin`
   - Password: `admin123`

3. **Check Browser Console** (Press F12):
   - Look for any red errors
   - Check the **Network** tab when you click "Sign In"
   - Find the request to `http://localhost:5000/api/admin/login`
   - Check the response

## Common Issues & Solutions

### Issue 1: "Network Error" or "Failed to fetch"
**Cause**: Backend server not running
**Solution**: 
```bash
npm run server
```
Keep this terminal open while using the admin panel.

### Issue 2: "Invalid credentials"
**Cause**: Wrong username/password or admin.json not created
**Solution**:
1. Check credentials: admin / admin123
2. Re-run initialization:
```bash
node scripts/initData.js
```

### Issue 3: CORS Error
**Cause**: CORS not configured  
**Solution**: Already configured in server.js with `cors()` middleware

### Issue 4: "Cannot POST /api/admin/login"
**Cause**: Wrong API endpoint or server not running
**Solution**: 
- Verify server running on port 5000
- Check server.js has the login route

## Manual API Test

Open a new PowerShell and run:

```powershell
$body = @{
    username = "admin"
    password = "admin123"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:5000/api/admin/login" -Method POST -Body $body -ContentType "application/json"

$response.Content | ConvertFrom-Json
```

**Expected Output**:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "username": "admin",
    "email": "admin@jayeshjewellers.com"
  }
}
```

## Verify Server is Running

```powershell
Get-Process -Name node | Select-Object Id, ProcessName
```

Should show at least one node process.

## Check if Port 5000 is Listening

```powershell
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
```

Should show connection on port 5000.

## Steps to Fix

1. **Stop all node processes**:
```powershell
Get-Process -Name node | Stop-Process -Force
```

2. **Restart backend**:
```powershell
npm run server
```

3. **In another terminal, keep frontend running**:
```powershell
npm run dev
```

4. **Try login again** at http://localhost:5173/admin/login

## Still Not Working?

Check the browser console and network tab:
1. Press F12 in browser
2. Go to Network tab
3. Try logging in
4. Click on the `/api/admin/login` request
5. Check the "Response" tab for error message

Share the error message for further debugging.
