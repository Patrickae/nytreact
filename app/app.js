var React = require("react");
var ReactDOM = require("react-dom");
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { HashRouter } from 'react-router-dom';

//require our main component
var Main = require("./components/Main");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(
  <HashRouter>
    <Route path="/" component={Main}>
      
    </Route>
  </HashRouter>,
  document.getElementById("app"));
