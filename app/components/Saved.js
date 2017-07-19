//require dependencies
var React = require("react");
var helpers = require("../utils/helpers");
import SavedArticle from "./SavedArticle";

var Saved = React.createClass({

  getInitialState: function() {

    return {savedArticles: ["hello"]}

  },

  componentDidMount(event) {

    helpers.getSavedArticles().then(function(response) {
      this.setState({savedArticles: response.data});
    }.bind(this));

    console.log("Main Component Mounted");
    console.log(this.state.savedArticles)

  },

  getSavedArticles: function() {

    helpers.getSavedArticles().then(function(response) {
      this.setState({savedArticles: response.data});
    }.bind(this));

    console.log("Clicked");
    console.log(this.state.savedArticles);

  },

  render: function() {
    var savedArticles = this.state.savedArticles;

    var savedArticles = savedArticles.map(function(item, index) {
      return <SavedArticle id= {item._id} url={item.url} title={item.title} date={item.date} restore={this.getSavedArticles} />
    }.bind(this));
    console.log(this.state.savedArticles);

    return (
      <div className="well well-sm">
        <button className="btn btn-warning" onClick={this.getSavedArticles}>Get Saved Articles</button>
        <br/>
        <div>
          {savedArticles}
        </div>

      </div>
    )
  }
});

module.exports = Saved;
