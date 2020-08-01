export NODE_ENV=production &&
/home/danang/.nvm/versions/node/v12.18.0/bin/npm run build &&
rm -rf /var/www/creativehustle.id/html/* &&
cp -R build/* /var/www/creativehustle.id/html/ &&
chown -R danang:danang /var/www/creativehustle.id/html/ &&
chmod -R 755 /var/www/creativehustle.id/html/ &&
nginx -t &&
systemctl restart nginx