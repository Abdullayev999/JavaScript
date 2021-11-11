// let map;
// let marker;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: {
//             lat: 40.4270063,
//             lng: 50.0756016
//         },
//         zoom: 11,
//         styles: [{
//                 "featureType": "all",
//                 "elementType": "labels",
//                 "stylers": [{
//                     "visibility": "on"
//                 }]
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                         "saturation": 36
//                     },
//                     {
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 40
//                     }
//                 ]
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                         "visibility": "on"
//                     },
//                     {
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 16
//                     }
//                 ]
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.icon",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             },
//             {
//                 "featureType": "administrative",
//                 "elementType": "geometry.fill",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 20
//                     }
//                 ]
//             },
//             {
//                 "featureType": "administrative",
//                 "elementType": "geometry.stroke",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 17
//                     },
//                     {
//                         "weight": 1.2
//                     }
//                 ]
//             },
//             {
//                 "featureType": "administrative.locality",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "color": "#c4c4c4"
//                 }]
//             },
//             {
//                 "featureType": "administrative.neighborhood",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "color": "#707070"
//                 }]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "geometry",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 20
//                     }
//                 ]
//             },
//             {
//                 "featureType": "poi",
//                 "elementType": "geometry",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 21
//                     },
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "poi.business",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "visibility": "on"
//                 }]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "geometry.fill",
//                 "stylers": [{
//                         "color": "#be2026"
//                     },
//                     {
//                         "lightness": "0"
//                     },
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "geometry.stroke",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                         "visibility": "off"
//                     },
//                     {
//                         "hue": "#ff000a"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "geometry",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 18
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "geometry.fill",
//                 "stylers": [{
//                     "color": "#575757"
//                 }]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "color": "#ffffff"
//                 }]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                     "color": "#2c2c2c"
//                 }]
//             },
//             {
//                 "featureType": "road.local",
//                 "elementType": "geometry",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 16
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.local",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "color": "#999999"
//                 }]
//             },
//             {
//                 "featureType": "road.local",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                     "saturation": "-52"
//                 }]
//             },
//             {
//                 "featureType": "transit",
//                 "elementType": "geometry",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 19
//                     }
//                 ]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [{
//                         "color": "#000000"
//                     },
//                     {
//                         "lightness": 17
//                     }
//                 ]
//             }
//         ]
//     });
// }

// initMap();

// // //MARKER
// // marker = new google.maps.Marker({
// //     position: { lat: 40.4270063, lng: 50.0756016 },
// //     map: map,
// //     icon: './icon.png', //svoya iconka
// //     draggable: true
// //         //mojno peremewat marker i podpisivatsa na eventi
// //         // i vipolnyat kakuyuto loqiku pri peremewenii pri klike i t.d.
// // });

// // //PEREMEWENIE MARKERA
// // let lng = 50.0856016;
// // setInterval(() => {
// //     lng -= 0.001;
// //     marker.setPosition({ lat: 40.4270063, lng: lng });


// //     //perenesti kartu
// //     map.panTo({ lat: 40.4270063, lng: lng });
// // }, 10000);


// // //PROQRUZIT POMETKI S JSON
// // map.data.loadGeoJson('data.json');



// // //SCITIVANIE LAT S POMOWYU CLIKA
// // // map.addListener('click', (data) => {
// // //     console.log(data.latLng.lat());
// // // })

// // marker.addListener('click', (data) => {
// //     console.log(data);
// // })

// // map.addListener('click', (data) => {
// //     console.log(data.latLng.lat());

// //     marker = new google.maps.Marker({
// //         position: { lat: data.latLng.lat(), lng: data.latLng.lng() },
// //         map: map,
// //         //icon: './icon.png', //svoya iconka
// //         draggable: true
// //             //mojno peremewat marker i podpisivatsa na eventi
// //             // i vipolnyat kakuyuto loqiku pri peremewenii pri klike i t.d.
// //     });
// // })



////////////////////////////////////////////////////////

let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 40.4270063,
            lng: 50.0756016
        },
        zoom: 11
    });
}

initMap();

// //MARKER
// marker = new google.maps.Marker({
//     position: { lat: 40.4270063, lng: 50.0756016 },
//     map: map,
//     icon: './icon.png', //svoya iconka
//     draggable: true
//         //mojno peremewat marker i podpisivatsa na eventi
//         // i vipolnyat kakuyuto loqiku pri peremewenii pri klike i t.d.
// });

// //PEREMEWENIE MARKERA
// let lng = 50.0856016;
// setInterval(() => {
//     lng -= 0.001;
//     marker.setPosition({ lat: 40.4270063, lng: lng });


//     //perenesti kartu
//     map.panTo({ lat: 40.4270063, lng: lng });
// }, 10000);


// //PROQRUZIT POMETKI S JSON
// map.data.loadGeoJson('data.json');



//SCITIVANIE LAT S POMOWYU CLIKA
// map.addListener('click', (data) => {
//     console.log(data.latLng.lat());
// })

// marker.addListener('click', (data) => {
//     console.log(data);
// })


let info;

map.addListener('click', async data => {
    if (info) {
        info.open(null);
    }
    let lat = data.latLng.lat();
    let lng = data.latLng.lng();
    //  console.log(lat);
    //console.log(lng);

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4d2ca4e6e3142073d2038dc0c5947677&units=metric`);
    let weather = await response.json();
    console.log(weather);

    info = new google.maps.InfoWindow({
        content: `
        <h1>${weather.name}</h1>
        <p>${weather.main.temp}</p>
        `,
        position: { lat, lng }
    })

    info.open(map, marker)
})