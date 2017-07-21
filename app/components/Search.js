var React = require("react");
var helpers = require("../utils/helpers.js");
var Results = require("./Results");
var moment = require('moment');

var Search = React.createClass({

//initial state
  getInitialState: function() {
    return {
      query: "",
      startYear: "",
      endYear: "",
      articles:[]
      }

  },
  //handle form submition
  handleChange(event) {
    this.setState({query: this.refs.query.value});
    this.setState({startYear: this.refs.startYear.value});
    this.setState({endYear: this.refs.endYear.value});

  },

  //reach out to helper to get search results
  searchNyt: function(event) {

    event.preventDefault();
    var query = this.state.query
    var startYear = this.state.startYear;
    var endYear = this.state.endYear;

    helpers.getNyt(query, startYear, endYear).then(function(apiResults){
      console.log( apiResults );
      this.setState({articles:apiResults.data.response.docs});
    }.bind(this));

    console.log(this.state);

  },
  //render the view
  render: function() {
    //send article info to "Results" component
    var articles = this.state.articles;
    var articlesToDisplay = articles.map(function(item, index){
      if(index < 5){
        //format date with momentjs
        item.pub_date = moment(item.pub_date).format("MMMM Do YYYY");
        return(
          //return the first 5 indexes
          <Results key={item._id} title={item.headline.main} date={item.pub_date} article={item.lead_paragraph}
            url={item.web_url} getSaved={this.props.getSaved} />
        )
      }
    }.bind(this));

//return jsx
    return (
      <div>
        {/* Begin Search div */}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Search</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" value={this.state.query} required ref="query" placeholder="Subject" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" value={this.state.startYear} required ref="startYear" placeholder="Start Year" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" value={this.state.endYear} required ref="endYear" placeholder="End Year" onChange={this.handleChange}/>
              </div>
              <button type="submit" className="btn btn-success" onClick={this.searchNyt}>Submit</button>
            </form>
          </div>
        </div>

        {/* Begin Results Div */}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Results</h3>
          </div>
          <div className="panel-body">{articlesToDisplay}</div>
        </div>
      </div>
    );
  }
})


module.exports = Search;
