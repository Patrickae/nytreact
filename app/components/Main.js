var React = require("react");

var Search = require("./Search.js");

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


        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Results</h3>
          </div>
          <div className="panel-body">
            Testing changes
          </div>
        </div>

      </div>
    );
  }
})

module.exports = Main;
