#!/bin/bash

# Build the React app
npm run build

# Create a copy of index.html for each route to handle client-side routing
cd build

# Create copies for common routes
cp index.html admin.html
cp index.html login.html
cp index.html register.html
cp index.html dashboard.html

# Create a .htaccess file for Apache-style redirects
echo "RewriteEngine On" > .htaccess
echo "RewriteCond %{REQUEST_FILENAME} !-f" >> .htaccess
echo "RewriteCond %{REQUEST_FILENAME} !-d" >> .htaccess
echo "RewriteRule . /index.html [L]" >> .htaccess

echo "Build completed with routing support!" 