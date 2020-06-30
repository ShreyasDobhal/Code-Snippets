const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan')
const app = express();

const IP = require('os').networkInterfaces( )['wlp3s0'][0]['address'];
const port = 4000;
const dbName = 'dbname'


// MODELS
let SampleModel = require('./models/SampleModel');


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
app.use('/static',express.static('static'));
app.use(express.urlencoded())


// PUG
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


// ROUTES
let products = require('./routes/sampleRoute.js');
app.use('/route',products);


// END POINTS
app.get('/',(req,res)=>{
    // res.send('Server is running . . . ');
    res.status(200).render('index.pug',{title:'Sample'});
    // res.status(200).json({message:'Hello World'});
});


// START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully`);
    console.log(`http://${IP}:${port}`);
});
