// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  //send the article as an obj with title, date, and url to api/saved
  saveArticle: function(data) {
    return axios.post("/api/saved", data);
  },

  getSavedArticles: function(){
    return axios.get("/api/saved", function(err, response){
      if(err){
        console.log(err)
      }
      else{
        return(response)
      }
    });
  },
  deleteArticles: function(ID){
    return axios.delete("/api/saved/:"+ID, function(err, response){
      if (err){
        console.log(err)
      }
      else{
        console.log(response);
      }
    })
  },

  getNyt: function(query, startDate, endDate) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({'api-key': "3b558bbe6588468aa1608ea2a40774da", 'q': query, 'begin_date': startDate+"0101", 'end_date': endDate+"1231"});

    return axios.get(url, function(err, result){
      if (err){
        console.log(err)
      }
        else{
        console.log(result);
      };
    });
  }
};
