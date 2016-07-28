#!/bin/sh -e

echo "Configuring UI to use APP Server: $myhero_app_server"
sed -i -e 's/MYHERO_APP_SERVER/'"$myhero_app_server"'/g' /usr/share/nginx/html/scripts/app.js
sed -i -e 's/MYHERO_APP_KEY/'"$myhero_app_key"'/g' /usr/share/nginx/html/scripts/app.js

echo "Starting Web Server"
nginx -g 'daemon off;'

