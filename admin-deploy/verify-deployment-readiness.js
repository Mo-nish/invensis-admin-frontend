#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 VERIFYING ADMIN SERVER DEPLOYMENT READINESS...\n');

// Check required files
const requiredFiles = [
  'index.js',
  'package.json',
  'package-lock.json',
  '.env',
  'middleware/auth.js',
  'models/Admin.js',
  'models/RoleAssignment.js',
  'routes/auth.js',
  'routes/roles.js',
  'routes/dashboard.js',
  'utils/emailService.js'
];

const requiredDirs = [
  'middleware',
  'models',
  'routes',
  'utils',
  'src'
];

let allGood = true;

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING!`);
    allGood = false;
  }
});

console.log('\n📁 Checking required directories...');
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ - MISSING!`);
    allGood = false;
  }
});

// Check package.json
console.log('\n📦 Checking package.json...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (packageJson.scripts && packageJson.scripts.start) {
    console.log('✅ Start script found');
  } else {
    console.log('❌ Start script missing in package.json');
    allGood = false;
  }
  
  if (packageJson.dependencies) {
    const requiredDeps = ['express', 'mongoose', 'cors', 'dotenv', 'bcryptjs', 'jsonwebtoken', 'nodemailer'];
    requiredDeps.forEach(dep => {
      if (packageJson.dependencies[dep]) {
        console.log(`✅ ${dep} dependency`);
      } else {
        console.log(`❌ ${dep} dependency missing`);
        allGood = false;
      }
    });
  }
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
  allGood = false;
}

// Check .env
console.log('\n🔧 Checking .env file...');
try {
  const envContent = fs.readFileSync('.env', 'utf8');
  const envLines = envContent.split('\n');
  
  const requiredEnvVars = ['PORT', 'MONGODB_URI', 'JWT_SECRET', 'ADMIN_JWT_SECRET'];
  requiredEnvVars.forEach(varName => {
    if (envLines.some(line => line.startsWith(varName + '='))) {
      console.log(`✅ ${varName}`);
    } else {
      console.log(`❌ ${varName} - missing in .env`);
      allGood = false;
    }
  });
} catch (error) {
  console.log('❌ Error reading .env file:', error.message);
  allGood = false;
}

// Check index.js
console.log('\n🚀 Checking index.js...');
try {
  const indexContent = fs.readFileSync('index.js', 'utf8');
  
  if (indexContent.includes('dotenv.config()')) {
    console.log('✅ Environment loading configured');
  } else {
    console.log('❌ Environment loading not configured');
    allGood = false;
  }
  
  if (indexContent.includes('app.listen')) {
    console.log('✅ Server listening configured');
  } else {
    console.log('❌ Server listening not configured');
    allGood = false;
  }
  
  if (indexContent.includes('/api/admin/health')) {
    console.log('✅ Health check endpoint configured');
  } else {
    console.log('❌ Health check endpoint missing');
    allGood = false;
  }
} catch (error) {
  console.log('❌ Error reading index.js:', error.message);
  allGood = false;
}

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('🎉 ALL CHECKS PASSED! Your admin server is ready for deployment!');
  console.log('\n📋 Next steps:');
  console.log('1. Create GitHub repository: invensis-admin-api');
  console.log('2. Upload files using the ZIP file or Git commands');
  console.log('3. Deploy to Render with the provided configuration');
  console.log('4. Set environment variables in Render');
  console.log('\n✅ You can proceed with confidence!');
} else {
  console.log('❌ SOME CHECKS FAILED! Please fix the issues above before deploying.');
  console.log('\n🔧 Fix the missing files or configurations and run this check again.');
}

console.log('\n📖 See GITHUB_UPLOAD_GUIDE.md for detailed instructions.'); 