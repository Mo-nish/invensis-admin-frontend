const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up client-side routing for Render...');

const buildDir = path.join(__dirname, '../build');
const indexHtmlPath = path.join(buildDir, 'index.html');

// Read the original index.html
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Routes that need copies of index.html
const routes = [
  'admin',
  'admin/login',
  'admin/register',
  'admin/dashboard',
  'login',
  'register',
  'dashboard'
];

// Create directories and copy index.html for each route
routes.forEach(route => {
  const routeDir = path.join(buildDir, route);
  const routeIndexPath = path.join(routeDir, 'index.html');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Copy index.html to the route
  fs.writeFileSync(routeIndexPath, indexHtml);
  console.log(`✅ Created ${route}/index.html`);
});

console.log('🎉 Client-side routing setup complete!'); 