let express = require('express');
let app = express();

console.log("Hello World");

//Serve a string response
/* app.get('/', (request, response) => {
    response.send('Hello Express');
}); */

//Serve html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

//Middleware for folder containing static assets
// Normal usage
app.use("/public", express.static(__dirname + "/public"));






































 module.exports = app;
