cd frontend/
npm install
npm run build
cp -r build ../backend
cd ..
cd backend/
npm install
node index.js