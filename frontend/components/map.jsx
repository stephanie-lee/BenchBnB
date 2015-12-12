var React = require("react");
var ReactDOM = require("react-dom")

var Map = React.createClass({
  render: function() {
    return(
      <div className="map" ref="map"></div>
    )
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    
  },

})

module.exports = Map
