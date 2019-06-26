var locations = [];
console.log(locations)

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

        var br = res.best_rated_restaurant;
        for (var i = 0; i < br.length; i++) {

            var address = [br[i].restaurant.location.latitude, br[i].restaurant.location.longitude, br[i].restaurant.name]

            locations.push(address) // console.log(br[i].restaurant.location.latitude)
            // console.log(br[i].restaurant.location.longitude)
            // , res[i].restaurant.location.longitude];
            // locations.push(res[i].restaurant.location.latitude)
        }
        $(".bottomCard").append("<div><img src=" + res.best_rated_restaurant[3].restaurant.photos[1].photo.url + "><div>");
        $(".bottomCard").append("<div class='restName'><strong>" + res.best_rated_restaurant[3].restaurant.name + "</strong> <div>");
        $(".bottomCard").append("<div class='restName'>" + res.best_rated_restaurant[3].restaurant.location.address + "<div>");
        $(".bottomCard").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // $(".bottomCard").append("<div><img src="+res.best_rated_restaurant[2].restaurant.featured_image+"><div>");
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

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][2]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        };
    });
}
getLocation();

var googleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDse6C2zpZnZ0N-ZdhDVsTRmgNyBHlUlM8&libraries=places';

