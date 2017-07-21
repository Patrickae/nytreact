//require dependencies
var React = require("react");
var helpers = require("../utils/helpers");
import SavedArticle from "./SavedArticle";


var Saved = React.createClass({



  render: function() {
    var savedArticles = this.props.saved;

    var savedArticles = savedArticles.map(function(item, index) {
      return <SavedArticle key={item._id} id={item._id} url={item.url} title={item.title} date={item.date} restore={this.props.getSaved} />
    }.bind(this));


    return (
      <div className="well well-sm">

        <div>
          {savedArticles}
        </div>

      </div>
    )
  }
});

module.exports = Saved;
