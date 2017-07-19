import React from "react";
import helpers from "../utils/helpers";


var SavedArticle = React.createClass({

  deleteArticle: function(){
      helpers.deleteArticles(this.props.id);
      this.props.restore();

  },

  render: function(){
    return(
      <div className="well well-sm" key={this.props.id}>
        <a href={this.props.url}>
          <h3>{this.props.title}</h3>
        </a>
        <h5>{this.props.date}</h5><button className="btn btn-danger" onClick={this.deleteArticle}>Delete</button>
      </div>
    )
  }
})

export default SavedArticle;
