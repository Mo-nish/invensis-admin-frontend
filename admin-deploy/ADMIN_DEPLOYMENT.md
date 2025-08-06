# 🚀 Admin Portal Deployment Guide

## ✅ **Admin Server is Ready for Deployment!**

Your admin server has been successfully prepared and tested locally. Here's how to deploy it to Render:

## 📋 **Step 1: Create New GitHub Repository**

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `invensis-admin-api`
3. Make it **Public** (for Render deployment)
4. **Don't** initialize with README, .gitignore, or license

## 📤 **Step 2: Upload Files to GitHub**

### Option A: Using the ZIP file (Recommended)
1. Download the `invensis-admin-api-clean.zip` file from this directory
2. Extract it to a new folder on your computer
3. Open terminal in that folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Admin server ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/invensis-admin-api.git
   git push -u origin main
   ```

### Option B: Manual Upload
1. Go to your new GitHub repository
2. Click "uploading an existing file"
3. Drag and drop all files from the `admin-deploy` folder
4. Commit the changes

## 🌐 **Step 3: Deploy to Render**

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account and select `invensis-admin-api`
4. Configure the service:

### **Basic Settings:**
- **Name**: `invensis-admin-api`
- **Environment**: `Node`
- **Region**: `Oregon (US West)`
- **Branch**: `main`
- **Root Directory**: `(leave empty)`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### **Environment Variables:**
Add these environment variables in Render:

```
PORT=5002
MONGODB_URI=mongodb+srv://your-mongodb-atlas-connection-string
JWT_SECRET=your-secret-key-here
ADMIN_JWT_SECRET=admin-secret-key-here
EMAIL_USER=testhrdp23@gmail.com
EMAIL_PASS=ujvdblbhpkxopqii
CORS_ORIGIN=https://your-frontend-domain.com
NODE_ENV=production
```

## ✅ **Step 4: Verify Deployment**

Once deployed, test these endpoints:

1. **Health Check**: `https://your-admin-api.onrender.com/api/admin/health`
2. **Root Endpoint**: `https://your-admin-api.onrender.com/`

Expected responses:
- Health: `{"status":"OK","message":"Admin server is running"}`
- Root: `{"message":"Invensis Admin Portal API","version":"1.0.0","status":"running"}`

## 🔗 **Step 5: Update Frontend Configuration**

After deployment, update your admin frontend to use the new API URL:

```javascript
// In your admin frontend
const API_BASE_URL = 'https://your-admin-api.onrender.com';
```

## 🎯 **Success Indicators**

✅ Admin server starts without errors  
✅ Health endpoint responds correctly  
✅ MongoDB connection successful  
✅ Email service configured  
✅ CORS properly configured  

## 🆘 **Troubleshooting**

- **Port Issues**: Make sure PORT=5002 in environment variables
- **MongoDB**: Verify your MongoDB Atlas connection string
- **CORS**: Check that CORS_ORIGIN is set correctly
- **Email**: Ensure EMAIL_USER and EMAIL_PASS are correct

---

**Your admin server is now ready for production deployment! 🚀** 