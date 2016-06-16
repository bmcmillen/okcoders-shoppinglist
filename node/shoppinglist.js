// Main js file of our shoppinglist app
var express = require('express');   //Import express routing module

var app = express();                // Create our app object that holds routes

app.listen(3000, function() {       // Start listening on port 3000
  console.log('listening on http://localhost:3000');
});

app.use('/', express.static('./app'));   // Serve our static HTML files

app.get('/listItems', function(req,res) {
  res.json([1,2,3]);
});

app.get('/thingsThatGoBang', function(req,res) {
  res.json(["Glock","AR-15","OMG! It's an Apache Gunship!"]);
});
