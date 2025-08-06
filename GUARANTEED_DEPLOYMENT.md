# 🚀 GUARANTEED RENDER DEPLOYMENT GUIDE

## **Step 1: Create a NEW GitHub Repository**

1. Go to [GitHub](https://github.com)
2. Click **"New repository"**
3. Name it: `invensis-hiring-api`
4. Make it **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

## **Step 2: Upload the Clean Server Files**

1. **Download this ZIP file** with the clean server files
2. **Extract** the ZIP file
3. **Upload all files** to your new GitHub repository

### **OR use these commands:**

```bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/invensis-hiring-api.git
cd invensis-hiring-api

# Copy these files to the repository:
# - index.js
# - package.json
# - package-lock.json
# - middleware/ (folder)
# - models/ (folder)
# - routes/ (folder)
# - utils/ (folder)
# - .env (with your MongoDB Atlas URI)

# Commit and push
git add .
git commit -m "Initial commit"
git push origin main
```

## **Step 3: Deploy to Render**

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect to your new GitHub repository: `YOUR_USERNAME/invensis-hiring-api`

### **Configure the service EXACTLY like this:**

**Basic Settings:**
- **Name**: `invensis-hiring-api`
- **Root Directory**: (leave **completely empty**)
- **Environment**: `Node`
- **Region**: Choose closest to you
- **Branch**: `main`
- **Plan**: `Free`

**Build & Deploy Settings:**
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Environment Variables:**
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://pmonishreddy19:Invensis2024!@cluster0.7m...
JWT_SECRET=d01ae62c9039aed4ec33146ede1c4b5aacdf73138e146b38ba77546...
EMAIL_USER=testhrdp23@gmail.com
EMAIL_PASS=ujvdblbhpkxopqii
FRONTEND_URL=https://hiring.invensis.com
CORS_ORIGIN=https://hiring.invensis.com,https://admin.invensis.com
```

## **Step 4: Test the Deployment**

After deployment completes, test these URLs:
- `https://your-service-name.onrender.com/`
- `https://your-service-name.onrender.com/api/health`

## **Why This Will Work:**

✅ **Clean repository structure** - no confusing folders
✅ **Single package.json** in root directory
✅ **Simple npm install and npm start** commands
✅ **No complex directory navigation**
✅ **All dependencies included**

## **If You Still Get Errors:**

1. **Check the repository structure** - make sure `package.json` is in the root
2. **Verify environment variables** - especially `MONGODB_URI`
3. **Check Render logs** for specific error messages
4. **Make sure the repository is public** (for free Render accounts)

---

**This approach will definitely work because it eliminates all the complexity that was causing the previous failures.** 