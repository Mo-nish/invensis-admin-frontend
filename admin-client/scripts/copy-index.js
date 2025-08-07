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
  
  // Copy index.html to the route directory
  fs.writeFileSync(routeIndexPath, indexHtml);
  console.log(`✅ Created ${route}/index.html`);
});

// Create a .htaccess file for Apache-style redirects
const htaccessContent = `RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Handle specific routes
RewriteRule ^admin/?$ /admin/index.html [L]
RewriteRule ^admin/login/?$ /admin/login/index.html [L]
RewriteRule ^admin/register/?$ /admin/register/index.html [L]
RewriteRule ^admin/dashboard/?$ /admin/dashboard/index.html [L]
RewriteRule ^login/?$ /login/index.html [L]
RewriteRule ^register/?$ /register/index.html [L]
RewriteRule ^dashboard/?$ /dashboard/index.html [L]`;

fs.writeFileSync(path.join(buildDir, '.htaccess'), htaccessContent);
console.log('✅ Created .htaccess file');

// Update the _redirects file with more specific rules
const redirectsContent = `/*    /index.html   200
/admin    /admin/index.html   200
/admin/    /admin/index.html   200
/admin/login    /admin/login/index.html   200
/admin/login/    /admin/login/index.html   200
/admin/register    /admin/register/index.html   200
/admin/register/    /admin/register/index.html   200
/admin/dashboard    /admin/dashboard/index.html   200
/admin/dashboard/    /admin/dashboard/index.html   200
/login    /login/index.html   200
/login/    /login/index.html   200
/register    /register/index.html   200
/register/    /register/index.html   200
/dashboard    /dashboard/index.html   200
/dashboard/    /dashboard/index.html   200`;

fs.writeFileSync(path.join(buildDir, '_redirects'), redirectsContent);
console.log('✅ Updated _redirects file');

console.log('🎉 Client-side routing setup complete!'); 