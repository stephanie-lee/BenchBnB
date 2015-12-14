var React = require("react");
var ReactDOM = require("react-dom");

var BenchStore = require("../stores/bench.js");
var ApiUtil = require('../util/api_util');
/* globals google */

var Map = React.createClass({
  getInitialState: function() {
    return { markeredSpots: [] };
  },

  render: function() {
    return(
      <div className="map" ref="map" id="map"></div>
    );
  },

  _onChange: function() {
    this.benches = BenchStore.all();
    var map = this.map;
    var markerList = this.state.markeredSpots;
    var newMarkers = [];

    this.benches.forEach(function(bench) {
      var LatLng = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({
        position: LatLng,
        map: map
      });
      newMarkers.push(marker);
    });

    this.setState({ markeredSpots: newMarkers });

    markerList.forEach(function(marker) {
      marker.setMap(null);
    });
  },

  _idleEvent: function(){
    var map = this.map;

    google.maps.event.addListener(map, 'idle', function() {
      var bounds = map.getBounds();

      var sw = bounds.getSouthWest();
      var ne = bounds.getNorthEast();
      var correctedBounds = {
                            "northEast": {"lat": ne.lat(), "lng": ne.lng()},
                            "southWest": {"lat": sw.lat(), "lng": sw.lng()}
                            };
      ApiUtil.fetchBenches(correctedBounds);
    });
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.mapListener = BenchStore.addListener(this._onChange);

    this._idleEvent();
  },
});

module.exports = Map;
