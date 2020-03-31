npm list tsc || npm install -g typescript
npm list concurrently || npm install -g concurrently
#install/update packages
NODE_ENV= npm install
cd server
NODE_ENV= npm install
cd ..
#build server and client
npm run build
echo Installed and built everything