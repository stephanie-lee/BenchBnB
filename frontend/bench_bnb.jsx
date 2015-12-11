var React = require('react');
var ReactDOM = require('react-dom');

var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<div>Hello World</div>, document.getElementById('root'));
});
