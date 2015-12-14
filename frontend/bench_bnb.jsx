var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById('root');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index.jsx');
var Search = require('./components/search.jsx');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
    );
  }
});
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
  </Route>
);
ReactDOM.render(<Router>{routes}</Router>, root);

// var routes = (
//   <Route path="/" component={Search}>
//   </Route>
// );
//
//
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(<div><Search /></div>, document.getElementById('root'));
// });
