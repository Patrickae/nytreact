var React = require("react");

var Search = require("./Search.js");

var helpers = require("../utils/helpers.js");

var Saved = require("./Saved")

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

        <Saved />

      </div>
    );
  }
})

module.exports = Main;
