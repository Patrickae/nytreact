var React = require("react");
var helpers = require("../utils/helpers")

var Results = React.createClass({
  render:function(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">

          <div className ="row">
            <div className="col-sm-10"><a href={this.props.url} target="_blank">{this.props.article}</a></div>
            <div className="col-sm-2 btn btn-primary" onClick={this.saveArticle}>Save</div>
          </div>
          <div className="row">
            {this.props.date}
          </div>

        </div>{/*end panel body */}
      </div>
    )
  },

  //custom functions

  saveArticle: function(){

    var object = {
      title: this.props.title,
      date: this.props.date,
      url: this.props.url
    };

    helpers.saveArticle(object);
  }

})

module.exports = Results;
