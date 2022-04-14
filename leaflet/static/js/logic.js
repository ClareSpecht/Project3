var mapboxAccessToken = API_KEY;

var map = L.map('map').setView([37.8, -96], 4);

var maxBounds = [
    [5.499550, -167.276413], //Southwest
    [83.162102, -52.233040]  //Northeast
];

// Basic Map w/ State Names Base Layer
var usmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: "",
    tileSize: 512,
    zoomOffset: -1, 
    maxBounds: maxBounds
}).addTo(map);

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Happiness Layer
function getColorhappy(d) {
    return d > 70 ? '#191184' :
        d > 65 ? '#373196' :
            d > 60 ? '#5552a7' :
                d > 55 ? '#7372b9' :
                    d > 50 ? '#9193ca' :
                        d > 45 ? '#afb3dc' :
                            d > 40 ? '#cdd4ed' :
                                '#ebf4ff';
}

function happystyle(feature) {
    return {
        fillColor: getColorhappy(feature.properties["Happiness Score"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var happy = L.geoJson(parksHapiness, {
    style: happystyle,
    onEachFeature: onEachFeature
});

// Pets Layer
function getColorpets(d) {
    return d > 70 ? '#ff0018' :
        d > 65 ? '#ff5b45' :
            d > 60 ? '#ff8971' :
                d > 55 ? '#ffb29f' :
                    d > 50 ? '#ffd9ce' :
                        '#ffffff';
}

function petstyle(feature) {
    return {
        fillColor: getColorpets(feature.properties["pet ownership"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var petjson = L.geoJson(parksHapiness, {
    style: petstyle,
    onEachFeature: onEachFeature
});

// Dog Layer
function getColordogs(d) {
    return d > 50 ? '#ff0018' :
        d > 45 ? '#ff5b45' :
            d > 40 ? '#ff8971' :
                d > 35 ? '#ffb29f' :
                    d > 30 ? '#ffd9ce' :
                        '#ffffff';
}

function dogstyle(feature) {
    return {
        fillColor: getColordogs(feature.properties["dog ownership"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var dogjson = L.geoJson(parksHapiness, {
    style: dogstyle,
    onEachFeature: onEachFeature
});

// Cat Layer
function getColorcats(d) {
    return d > 40 ? '#ff0018' :
        d > 35 ? '#ff5b45' :
            d > 30 ? '#ff8971' :
                d > 25 ? '#ffb29f' :
                    d > 20 ? '#ffd9ce' :
                        '#ffffff';
}

function catstyle(feature) {
    return {
        fillColor: getColorcats(feature.properties["cat ownership"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var catjson = L.geoJson(parksHapiness, {
    style: catstyle,
    onEachFeature: onEachFeature
});

// Income Layer
function getColorincome(d) {
    return d > 80000 ? '#00ff00' :
        d > 75000 ? '#5eff48' :
            d > 70000 ? '#85ff6c' :
                d > 65000 ? '#a3ff8b' :
                    d > 60000 ? '#bdffa9' :
                        d > 55000 ? '#d4ffc5' :
                            d > 50000 ? '#eaffe2' :
                                '#fefefe';
}

function incomestyle(feature) {
    return {
        fillColor: getColorincome(feature.properties["HouseholdIncome"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var incomejson = L.geoJson(parksHapiness, {
    style: incomestyle,
    onEachFeature: onEachFeature
});

// Crime Layer
function getColorcrime(d) {
    return d > 100000 ? '#ff7200' :
        d > 75000 ? '#ff8736' :
            d > 50000 ? '#ff9b58' :
                d > 25000 ? '#ffaf79' :
                    d > 20000 ? '#ffc39a' :
                        d > 10000 ? '#ffd7bb' :
                            d > 5000 ? '#ffeadc' :
                                '#fefefe';
}

function crimestyle(feature) {
    return {
        fillColor: getColorcrime(feature.properties["Crime"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var crimejson = L.geoJson(parksHapiness, {
    style: crimestyle,
    onEachFeature: onEachFeature
});

// Colleges Layer
function getColorcollege(d) {
    return d > 9 ? '#fffc00' :
        d > 7 ? '#fffc5a' :
            d > 5 ? '#fffc88' :
                d > 3 ? '#fffdb1' :
                    d > 1 ? '#fffdd8' :
                        '#fefefe';
}

function collegestyle(feature) {
    return {
        fillColor: getColorcollege(feature.properties["University"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var collegejson = L.geoJson(parksHapiness, {
    style: collegestyle,
    onEachFeature: onEachFeature
});

// State Parks Layer
function getColorparks(d) {
    return d > 100 ? '#042b0b' :
        d > 75 ? '#2c4a2e' :
            d > 50 ? '#526b53' :
                d > 30 ? '#7a8e7b' :
                    d > 20 ? '#a4b2a4' :
                        d > 10 ? '#d0d7d0' :
                            '#fefefe';
}

function parkstyle(feature) {
    return {
        fillColor: getColorparks(feature.properties["State Parks"]),
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

var parkjson = L.geoJson(parksHapiness, {
    style: parkstyle,
    onEachFeature: onEachFeature
});

// Legend - Currently only set up for Happiness scale, not dynamic w/ layers
var legend = L.control({position: 'bottomright'});

legend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [35, 40, 45, 50, 55, 60, 65, 70],
        labels = [];
    
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorhappy(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' + '<br>': '+');
    }

    return div;
};

legend.addTo(map);

// Layers established
var happiness = L.layerGroup([happy])
var pets = L.layerGroup([petjson])
var dogs = L.layerGroup([dogjson])
var cats = L.layerGroup([catjson])
var income = L.layerGroup([incomejson])
var crime = L.layerGroup([crimejson])
var college = L.layerGroup([collegejson])
var parks = L.layerGroup([parkjson])

var overlayMaps = {
    "Happiness Score (%)": happiness,
    "Pet Ownership (%)" : pets,
    "Dog Ownership (%)" : dogs,
    "Cat Ownership (%)" : cats,
    "Average Household Income ($)" : income,
    "Incidents of Violent Crime" : crime,
    "Number of Ranked Universities" : college,
    "Number of State Parks" : parks
};

var layerControl = new L.control.layers(null, overlayMaps).addTo(map);

// Marker based on happiness levels
var happyface = L.icon({
    iconUrl: '../Resources/smiley.png',
    });

// Struggling to dynamically size images and may not be centered on lat/lng
for (var i = 0; i < parksHapiness.features.length; i++) {
    L.marker([parksHapiness.features[i].properties.center_latitude, parksHapiness.features[i].properties.center_longitude], {
      opacity: 0.5,
      icon: happyface,
      iconWidth: parksHapiness.features[i].properties["Happiness Score"]
    }).addTo(map);
  }