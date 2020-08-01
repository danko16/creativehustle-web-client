eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa_github
git pull origin master
export NODE_ENV=production
yarn
npm run build
rm -rf /var/www/creativehustle.id/html/*
cp -R build/* /var/www/creativehustle.id/html/
nginx -t
systemctl restart nginx