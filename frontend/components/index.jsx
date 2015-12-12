var React = require("react");
var BenchStore = require("../stores/bench");
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  _onChange: function() {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    return(
      <ul>
        {this.state.benches.map(function (bench) {
          return <li key={bench.id}>{bench.description}</li>;
        })}
      </ul>
    );
  }

});

module.exports = Index
