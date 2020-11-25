mkdir backend
cd backend
touch server.js
npm init -y
npm install --save express
npm install --save sequelize
npm install --save mysql2
mkdir config
mkdir routes
mkdir models
mkdir controllers
cd ..
npm install -g create-react-app
npx create-react-app frontend
echo "node_modules" >> .gitignore
