var mapboxAccessToken = API_KEY;
var map = L.map('map').setView([37.8, -96], 4);

var maxBounds = [
    [5.499550, -167.276413], //Southwest
    [83.162102, -52.233040]  //Northeast
];

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: "",
    tileSize: 512,
    zoomOffset: -1, 
    maxBounds: maxBounds
}).addTo(map);

// L.geoJson(statesData).addTo(map);

function getColor(d) {
    return d > 1000 ? '#800026' :
        d > 500 ? '#BD0026' :
            d > 200 ? '#E31A1C' :
                d > 100 ? '#FC4E2A' :
                    d > 50 ? '#FD8D3C' :
                        d > 20 ? '#FEB24C' :
                            d > 10 ? '#FED976' :
                                '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// L.geoJson(statesData, {style: style}).addTo(map);


var geojson;

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);





