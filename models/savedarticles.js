
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SavedSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  url:{
    type: String
  }
});

var SavedArticle = mongoose.model("SavedArticles", SavedSchema);

module.exports = SavedArticle;
