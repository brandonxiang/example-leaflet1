var map = L.map('map', { renderer: L.canvas() }).setView([37.77, -122.43], 5);

var base = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];

var marker = L.marker([37.77, -122.43],{draggable:true}).addTo(map);
var circleMarker = L.circleMarker([34.04, -118.2]).addTo(map);
var polyline = L.polyline(latlngs).addTo(map);
var pictureMarker = L.pictureMarker([45.51, -122.68]).addTo(map);

L.control.layers({"base":base},{
    "marker":marker,
    "circleMarker":circleMarker,
    "polyline":polyline,
    "pictureMarker":pictureMarker
}).addTo(map);


