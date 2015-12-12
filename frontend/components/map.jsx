var React = require("react");
var ReactDOM = require("react-dom");

var BenchStore = require("../stores/bench.js")
/* globals google */
//why is google globally available

var Map = React.createClass({
  render: function() {
    return(
      <div className="map" ref="map"></div>
    )
  },

  _onChange: function() {
    // this.setState({ benches: BenchStore.all() });
    // Finish this
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.mapListener = BenchStore.addListener(this._onChange)
  },
})

module.exports = Map
