var React = require("react");
var ReactDOM = require("react-dom");

//require our main component
var Main = require("./components/Main");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main />, document.getElementById("app"));
