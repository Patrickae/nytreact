var React = require("react");

var Search = require("./Search.js");

var helper = require("../utils/helpers.js");

var Main = React.createClass({

  getInitialState: function(){

    return{
      searchResults: [],
      savedResults: []
    }
  },



  render: function() {
    return (
      <div className = "container">
        <div className="jumbotron">
          <h1>New York Times Scrubber</h1>
          <p>find news from years past</p>
        </div>


        <Search />



      </div>
    );
  }
})

module.exports = Main;
