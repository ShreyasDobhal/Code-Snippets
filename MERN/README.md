# MERN Stack

MongoDB + Express + ReactJS + Node.js

## Project Setup

**Step 1)** Inside your project directory create two folders, **client** and **server**

### Server side

**Step 2)** Inside server, initialize project with npm using : 
```
npm init
```
Set **server.js** as the starting point, and complete the initialization process.


**Step 3)** Next install the required dependencies using the following commands : 
```
npm install express
npm install mongoose
npm install body-parser
npm install morgan
npm install nodemon --save-dev
```

**Step 4)** Add following lines in the scripts part of **package.json** or copy it from the repo : 
```
"start": "node server.js",
"dev": "nodemon server.js"
```
Once done with all the steps, later on you can use following commands to run the server part of your project : 
* Use **npm start** to run the server
* Use **npm run dev** to run the sever with nodemon (auto restart)


**Step 5)** Next create **server.js** file, and copy code from **server.js** from repo.

<details>
  <summary>server.js</summary>
  
  ```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const app = express();

const IP = require('os').networkInterfaces( )['wlp3s0'][0]['address'];
const port = 4000;
const dbName = 'dbname'


// MODELS
// let SampleModel = require('./models/SampleModel');


// MONGOOSE
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    // Connected
    console.log("Connected to MongoDB !");
});


// MORGAN
app.use(morgan('dev'));


// BODY-PARSER
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// STATIC FILES
// app.use('/static',express.static('static'));
// app.use(express.urlencoded())


// ROUTES
// let sampleRoute = require('./routes/sampleRoute.js');
// app.use('/route',sampleRoute);


// END POINTS
app.get('/',(req,res)=>{
    res.send('Server is running . . . ');
    // res.status(200).json({message:'Hello World'});
});


// START THE SERVER
app.listen(port,()=>{
    console.log(`Server started successfully`);
    console.log(`http://${IP}:${port}`);
});
  ```
</details>


**Step 6)** Create **models** and **routes** folders as per requirements (if needed copy code from repo for samples of each).

### Client side

**Step 7)** Inside the client folder run the following command : 
```
npx create-react-app .
```


**Step 8)** Remove **logo.svg**, **App.css** and **App.test.js**


**Step 9)** Next install the required dependencies for client using the following commands : 
```
npm install redux
npm install react-redux
npm install react-router-dom
npm install bootstrap
npm install reactstrap
```

**Step 10)** Copy code from **App.js** in repo to your local file.
<details>
  <summary>App.js</summary>
  
  ```javascript
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={()=>{return (<h1>Client running . . .</h1>)}} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
  ```
</details>


**Step 11)** Inside src folder create **components**, **reducers** and **actions** folders as per requirements


## Running the Project

You can run the project using the following commands
* Inside server, use **npm start** to run the server
* Inside server, use **npm run dev** to run the sever with nodemon (auto restart)
* Inside client, use **npm start** to run the client


## Git Version Control

To add git to your project, 

**Step 1)** Inside client folder run the following command, to remove git from client.
```
rm -rf .git
```

**Step 2)** Inside server, copy paste the **.gitignore** file from client folder

**Step 3)** Inside root project directory, initialize git :
```
git init
```
