require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");

//Serve a string response
/* app.get('/', (request, response) => {
    response.send('Hello Express');
}); */

//Serving json response 
let obj = {
    "message": "Hello json"
}
/*
app.get('/json', (req, res) => {
    res.json(obj)
}); */

//Serving json response using env and condition
app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "HELLO JSON"}) 
    } else {
        res.json(obj)
    }
});

//Serve html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

//Middleware for folder containing static assets
// Normal usage
app.use("/public", express.static(__dirname + "/public"));






































 module.exports = app;
