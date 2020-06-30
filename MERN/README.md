# MERN Stack

MongoDB Expressjs ReactJS Node.js

## Project Setup

**Step 1)** Initialize project with npm using : 
```
npm init
```
Set **server.js** as the starting point, and complete the initialization process.


**Step 2)** Next install the required dependencies using the following commands : 
```
npm install express
npm install mongoose
npm install body-parser
npm install morgan
npm install concurrently 
npm install nodemon --save-dev
```


**Step 3)** Add following lines in the scripts part of package.json or copy it from the repo : 
 ```
"start": "node server.js",
"server": "nodemon server.js",
"client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""
```
Once done, later on you can use following commands to run your project : 
* Use **npm start** to run the server
* Use **npm run server** to run the sever with nodemon (auto restart)
* Use **npm run client** to run the client
* Use **npm run dev** to run both server and client concurrently


**Step 4)** Next create **server.js** file, and copy code from **server.js** from repo.


**Step 5)** Create **models** , **routes** and **client** folders.


**Step 6)** Add sample files in **models** and **routes** folders.


**Step 7)** Inside the client folder run the following command : 
```
npx create-react-app .
```


**Step 8)** Remove **logo.svg** and **index.css**. Also clear **App.css**  


**Step 9)** Remove import to index.css file from **index.js**  


**Step 10)** Copy code from **App.js** in repo to your local file.  


**Step 11)** Next install the required dependencies for client using the following commands : 
```
npm install bootstrap
npm install reactstrap
```


**Step 12)** Inside client create **components** folder and add the sample file from the repo.  


## Running the Project

As stated in **Step 3**, you can run the project using the following commands
* Use **npm start** to run the server
* Use **npm run server** to run the sever with nodemon (auto restart)
* Use **npm run client** to run the client
* Use **npm run dev** to run both server and client concurrently

