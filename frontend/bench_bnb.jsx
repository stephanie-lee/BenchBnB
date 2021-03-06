var React = require('react');
var ReactDOM = require('react-dom');

var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index.jsx');
var Search = require('./components/search.jsx');

window.ApiUtil = ApiUtil;
window.BenchStore = BenchStore;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<div><Search /></div>, document.getElementById('root'));
});
