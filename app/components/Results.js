var React = require("react");
var helpers = require("../utils/helpers");


var Results = React.createClass({
  render:function(){
    return(

        <div className="well well-sm">

          <div className ="row">
            <div className="col-sm-10">
              <h3>
                <a href={this.props.url} target="_blank">{this.props.title}</a>
              </h3>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" onClick={this.saveArticle}>Save</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>created: {this.props.date}</p>
            </div>
          </div>

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
