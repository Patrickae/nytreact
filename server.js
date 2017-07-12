// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


//require schema
var SavedArticles = require("./models/savedarticles.js");

var app = express();

//use port 8080 or the port chosen by the host
var PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//-----------------------
//MongoDB config

mongoose.connect("mongodb://andyepatrick:aepster4@ds054999.mlab.com:54999/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});



//----------------------

//main route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});



//route to api
app.get("/api", function(req, res) {
  SavedArticles.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});






app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
