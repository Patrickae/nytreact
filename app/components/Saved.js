//require dependencies
var React = require("react");
var helpers = require("../utils/helpers");

var Saved = React.createClass({

  getInitialState: function(){

    return{
      savedArticles:[]
    }

  },


  componentWillMount: function(){

    helpers.getSavedArticles().then(function(response){
      this.setState({
        savedArticles:response.data
      });
    }.bind(this));

    console.log("Main Component Mounted");
    console.log(this.state.savedArticles)

  },



  getSavedArticles: function(){

    // helpers.getSavedArticles().then(function(response){
    //   this.setState({
    //     savedArticles: response.data
    //   });
    // }.bind(this));
    //
    // console.log("Clicked");
    console.log(this.state.savedArticles);

  },

  render: function(){

    var savedArticlesDiv = this.state.savedArticles.map(function(item, index){
  <div className="well well-sm"value = {item._id}>
    <a href={item.url}><h3>{item.title}</h3></a>
    <h5>{item.date}</h5>
  </div>
});

    return(
      <div className="well well-sm">
        <button className="btn btn-warning" onClick={this.getSavedArticles}>Get Saved Articles</button>

        {savedArticlesDiv}
        
      </div>
    )
  }
});

module.exports = Saved;
