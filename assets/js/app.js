var locations = [];
console.log(locations)

function displayRestaurantInfo() {

    var queryURL = "https://developers.zomato.com/api/v2.1/location_details?entity_id=276&entity_type=city&limit=9";

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

            locations.push(address)
        }
        // Card 1
        $(".bottomCard1").append("<div><img src=" + br[0].restaurant.photos[0].photo.url + "><div>");
        $(".bottomCard1").append("<div class='restName'><strong>" + br[0].restaurant.name + "</strong> <div>");
        $(".bottomCard1").append("<div class='restName'>" + br[0].restaurant.location.address + "<div>");
        $(".bottomCard1").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 2
        $(".bottomCard2").append("<div><img src=" + br[1].restaurant.photos[1].photo.url + "><div>");
        $(".bottomCard2").append("<div class='restName'><strong>" + br[1].restaurant.name + "</strong> <div>");
        $(".bottomCard2").append("<div class='restName'>" + br[1].restaurant.location.address + "<div>");
        $(".bottomCard2").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 3
        $(".bottomCard3").append("<div><img src=" + br[2].restaurant.photos[2].photo.url + "><div>");
        $(".bottomCard3").append("<div class='restName'><strong>" + br[2].restaurant.name + "</strong> <div>");
        $(".bottomCard3").append("<div class='restName'>" + br[2].restaurant.location.address + "<div>");
        $(".bottomCard3").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 4
        $(".bottomCard4").append("<div><img src=" + br[3].restaurant.photos[3].photo.url + "><div>");
        $(".bottomCard4").append("<div class='restName'><strong>" + br[3].restaurant.name + "</strong> <div>");
        $(".bottomCard4").append("<div class='restName'>" + br[3].restaurant.location.address + "<div>");
        $(".bottomCard4").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 5
        $(".bottomCard5").append("<div><img src=" + br[4].restaurant.photos[4].photo.url + "><div>");
        $(".bottomCard5").append("<div class='restName'><strong>" + br[4].restaurant.name + "</strong> <div>");
        $(".bottomCard5").append("<div class='restName'>" + br[4].restaurant.location.address + "<div>");
        $(".bottomCard5").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 6
        $(".bottomCard6").append("<div><img src=" + br[5].restaurant.photos[5].photo.url + "><div>");
        $(".bottomCard6").append("<div class='restName'><strong>" + br[5].restaurant.name + "</strong> <div>");
        $(".bottomCard6").append("<div class='restName'>" + br[5].restaurant.location.address + "<div>");
        $(".bottomCard6").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 7
        $(".bottomCard7").append("<div><img src=" + br[6].restaurant.photos[6].photo.url + "><div>");
        $(".bottomCard7").append("<div class='restName'><strong>" + br[6].restaurant.name + "</strong> <div>");
        $(".bottomCard7").append("<div class='restName'>" + br[6].restaurant.location.address + "<div>");
        $(".bottomCard7").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 8
        $(".bottomCard8").append("<div><img src=" + br[7].restaurant.photos[7].photo.url + "><div>");
        $(".bottomCard8").append("<div class='restName'><strong>" + br[7].restaurant.name + "</strong> <div>");
        $(".bottomCard8").append("<div class='restName'>" + br[7].restaurant.location.address + "<div>");
        $(".bottomCard8").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 9
        $(".bottomCard9").append("<div><img src=" + br[8].restaurant.photos[8].photo.url + "><div>");
        $(".bottomCard9").append("<div class='restName'><strong>" + br[8].restaurant.name + "</strong> <div>");
        $(".bottomCard9").append("<div class='restName'>" + br[8].restaurant.location.address + "<div>");
        $(".bottomCard9").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // Card 10
        $(".bottomCard10").append("<div><img src=" + br[9].restaurant.photos[9].photo.url + "><div>");
        $(".bottomCard10").append("<div class='restName'><strong>" + br[9].restaurant.name + "</strong> <div>");
        $(".bottomCard10").append("<div class='restName'>" + br[9].restaurant.location.address + "<div>");
        $(".bottomCard10").append("<div class='bottomCardButton'><button>View Details</button><div>");

    });

};
// Will call displayRestaurantInfo Function
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

