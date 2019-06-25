function displayRestaurantInfo() {

    var queryURL = "https://developers.zomato.com/api/v2.1/location_details?entity_id=276&entity_type=city";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "user-key": "80a859005d228cbe6e5d4de4f886ebe8"
        }
    }).then(function (res) {
        console.log(res.best_rated_restaurant);
        $("#media").append("<div><b>Rated:</b> "+res.best_rated_restaurant[2].restaurant.name+"<div>");
        $("#media").append("<div><img src="+res.best_rated_restaurant[2].restaurant.photos[2].photo.url+"><div>");
        
        
    });

};
displayRestaurantInfo();

var searchInput = document.getElementById('searchInput');

function searchAdd() {
    var searchValue = searchInput.value;
    console.log(searchValue);
}





////////////////////////////////////////////////////////////////////////////////
/// Map 
////////////////////////////////////////////////////////////////////////////////

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat, long);

    $.ajax({
        url: googleURL,
        method: 'GET',
        dataType: 'jsonp'
    }).then(function () {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var x = parseFloat(latitude);
        var y = parseFloat(longitude);

        var latlng = new google.maps.LatLng(x, y);
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), myOptions);

        var marker = new google.maps.Marker({
            position: { lat: x, lng: y },
            map: map
        });
    });
}
getLocation();

var googleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDse6C2zpZnZ0N-ZdhDVsTRmgNyBHlUlM8&libraries=places';

// $.ajax({
//   url: googleURL,
//   method: 'GET',
//   dataType: 'jsonp'
// }).then(function(response) {
//   console.log(response);
//   // var map = new google.maps.Map($('#map'), {
//   //   // map = new google.maps.Map(mapHolder, {
//   //   center: { lat: 32.7767, lng: -96.797 },
//   //   zoom: 15
//   // });

//   // new google.maps.Marker({
//   //   position: { lat: 32.7767, lng: -96.797 },
//   //   map: map
//   // });
// });

//Geocode
// var streetAddress;

// var map;
// var latitude = '-34.397';
// var longitude = '150.644';

// var x = parseFloat(latitude);
// var y = parseFloat(longitude);
// $.ajax({
//   url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${x},${y}&key=AIzaSyAjeialU4h1T6nGiUrbfHZXpyi4xBJ361E`,
//   method: 'GET'
// }).then(function(geo) {
//   console.log(geo);
// });
// var map;
// function initMap() {
//   map = new google.maps.Map($('#map'), {
//     center: { lat: x, lng: y },
//     zoom: 8
//   });
// }

//////////////////////////////////////////////////////////////////////////////////
///Mapd ends here
//////////////////////////////////////////////////////////////////////////////////

