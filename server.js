// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


//require schema
var SavedArticle = require("./models/savedarticles.js");

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





//route to api
app.get("/api/saved", function(req, res) {
  SavedArticle.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/api/saved/:id", function(req, res) {
  SavedArticle.find({"_id": req.params.id}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


//save articles to favorites
app.post("/api/saved", function(req,res){
  var entry = new SavedArticle(req.body);
  entry.save(function(err, doc){
    if (err){
      console.log(err);
    }
    else{
      console.log(doc);
    }
  });
});


app.delete("/api/saved/:id", function(req, res){

	SavedArticle.findByIdAndRemove(req.params.id, function(err, doc){
		if(err){
			console.log("collection couldnt be removed " + err);
			return;
		}else{
			console.log("collection deleted");
		}
	});
})



//main route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});





app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
