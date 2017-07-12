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

var SavedArticles = mongoose.model("SavedArticles", SavedSchema);

module.exports = SavedArticles;
