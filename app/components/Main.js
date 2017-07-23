var React = require("react");

var Search = require("./Search.js");

var helpers = require("../utils/helpers.js");

var Saved = require("./Saved")

class Main extends React.Component{

  constructor(){
  super();

    this.state = {

      savedArticles: []
    }

this.componentDidMount = this.componentDidMount.bind(this);
this.getSavedArticles = this.getSavedArticles.bind(this);

} //end constructor



  componentDidMount(event) {

    helpers.getSavedArticles().then(function(response) {
      this.setState({savedArticles: response.data});
    }.bind(this));

    console.log("Main Component Mounted");
  }


  getSavedArticles(){

    helpers.getSavedArticles().then(function(response) {
      this.setState({savedArticles: response.data});
    }.bind(this));


  }


  render(){
    return (

      <div className = "container-fluid">


        <div className="jumbotron">
          <h1>New York Times Scrubber</h1>
          <p><i>find news from years past</i></p>
        </div>


        <Search getSaved={this.getSavedArticles} />

        <Saved saved={this.state.savedArticles} getSaved={this.getSavedArticles} />

      </div>

    );
  }
}

module.exports = Main;
