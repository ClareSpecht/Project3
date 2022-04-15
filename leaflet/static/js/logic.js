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
        fillColor: getColorhappy(feature.properties["Happiness_Score"]),
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
    return d > 50 ? '#9603fd' :
        d > 45 ? '#b253ff' :
            d > 40 ? '#ca81ff' :
                d > 35 ? '#deabff' :
                    d > 30 ? '#efd5ff' :
                        '#fefefe';
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
    return d > 40 ? '#fd03dd' :
        d > 35 ? '#ff61e4' :
            d > 30 ? '#ff8feb' :
                d > 25 ? '#ffb6f2' :
                    d > 20 ? '#ffdbf8' :
                        '#fefefe';
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

// Happiness Legend
var happinesslegend = L.control({position: 'bottomright'});

happinesslegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 40, 45, 50, 55, 60, 65, 70];
    
    div.innerHTML += '<p><strong> Happiness Score % </strong></p>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorhappy(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// Pets Legend
var petslegend = L.control({position: 'bottomright'});

petslegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 50, 55, 60, 65, 70],
        labels = [];
    
    div.innerHTML += '<p><strong> Pet Ownership % </strong></p>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorpets(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// Dog Legend
var doglegend = L.control({position: 'bottomright'});

doglegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 30, 35, 40, 45, 50],
        labels = [];
    
    // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML += '<p><strong> Dog Ownership % </strong></p>';
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColordogs(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// Cats Legend
var catlegend = L.control({position: 'bottomright'});

catlegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 20, 25, 30, 35, 40],
        labels = [];
    
    // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML += '<p><strong> Cat Ownership % </strong></p>';
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorcats(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// Income Legend
var incomelegend = L.control({position: 'bottomright'});

incomelegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 50000, 55000, 60000, 65000, 7000, 75000, 80000],
        labels = [];
    
    div.innerHTML += '<p><strong> Average Household Income ($)</strong></p>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorincome(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// Crime Legend
var crimelegend = L.control({position: 'bottomright'});

crimelegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 5000, 10000, 20000, 25000, 50000, 75000, 100000],
        labels = [];
    
    div.innerHTML += '<p><strong> Incidents of Violent Crime </strong></p>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorcrime(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// University Legend
var collegelegend = L.control({position: 'bottomright'});

collegelegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 2, 4, 6, 8, 10],
        labels = [];
    
    div.innerHTML += '<p><strong> Number of Ranked Universities </strong></p>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorcollege(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

// University Legend
var parkslegend = L.control({position: 'bottomright'});

parkslegend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 10, 20, 30, 50, 75, 100],
        labels = [];
    
    div.innerHTML += '<p><strong> Number of State Parks </strong></p>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorparks(grades[i] + 1) + '"></i> ' +
            (grades[i-1] ? grades[i]: '<'+ grades[i+1]+ '<br>' + '<br>') + (grades[i + 1] && grades[i-1] ?  '&ndash;' + grades[i + 1] + '<br>' + '<br>': (grades[i-1] ?'+':''));
    }

    return div;
};

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

map.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === "Happiness Score (%)") {
        happinesslegend.addTo(map);
    }
    else if (eventLayer.name === "Pet Ownership (%)") {
        petslegend.addTo(map);
    }
    else if (eventLayer.name === "Dog Ownership (%)") {
        doglegend.addTo(map);
    }
    else if (eventLayer.name === "Cat Ownership (%)") {
        catlegend.addTo(map);
    }
    else if (eventLayer.name === "Average Household Income ($)") {
        incomelegend.addTo(map);
    }
    else if (eventLayer.name === "Incidents of Violent Crime") {
        crimelegend.addTo(map);
    }
    else if (eventLayer.name === "Number of Ranked Universities") {
        collegelegend.addTo(map);
    }
    else if (eventLayer.name === "Number of State Parks") {
        parkslegend.addTo(map);
    }
  })
  map.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === "Happiness Score (%)") {
        map.removeControl(happinesslegend);
    }
    else if (eventLayer.name === "Pet Ownership (%)") {
        map.removeControl(petslegend);
    }
    else if (eventLayer.name === "Dog Ownership (%)") {
        map.removeControl(doglegend);
    }
    else if (eventLayer.name === "Cat Ownership (%)") {
        map.removeControl(catlegend);
    }
    else if (eventLayer.name === "Average Household Income ($)") {
        map.removeControl(incomelegend);
    }
    else if (eventLayer.name === "Incidents of Violent Crime") {
        map.removeControl(crimelegend);
    }
    else if (eventLayer.name === "Number of Ranked Universities") {
        map.removeControl(collegelegend);
    }
    else if (eventLayer.name === "Number of State Parks") {
        map.removeControl(parkslegend);
    }
  })

// // Marker based on happiness levels
// var happyface = L.icon({
//     iconUrl: '../Resources/smiley.png',
//     });

// // Struggling to dynamically size images and may not be centered on lat/lng
// for (var i = 0; i < parksHapiness.features.length; i++) {
//     L.marker([parksHapiness.features[i].properties.center_latitude, parksHapiness.features[i].properties.center_longitude], {
//       opacity: 0.5,
//       icon: happyface,
//       iconWidth: parksHapiness.features[i].properties["Happiness Score"]
//     }).addTo(map);
//   }