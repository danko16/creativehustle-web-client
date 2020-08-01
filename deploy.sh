export NODE_ENV=production
react-scripts build
rm -rf /var/www/creativehustle.id/html/*
cp -R build/* /var/www/creativehustle.id/html/
nginx -t
systemctl restart nginx