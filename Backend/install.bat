@echo off
echo "%~0"
echo "%~f0"
echo "%~dp0"
echo Nom du Dossier Parent est : "%~dp0" 
cd %~dp0
npm install
npm install express
npm install -g nodemon
npm install mongoose
npm install mongoose-unique-validator
npm install jsonwebtoken
npm install bcrypt
npm start