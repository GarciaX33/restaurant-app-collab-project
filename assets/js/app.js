$(document).ready(function () {
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
            // console.log(res);


            ///turned response from zomato api into a var for easier use///
            var br = res.best_rated_restaurant;
            /////This loops response from zomato api///
            for (var i = 0; i < br.length; i++) {

                var address = [br[i].restaurant.location.latitude, br[i].restaurant.location.longitude, br[i].restaurant.name, br[i].restaurant.user_rating.aggregate_rating, br[i].restaurant.location.address]
                console.log(address);
                ///pushed address var into empty locations array///
                locations.push(address)
            }
            // Card 1
            $(".bottomCard1").append("<div><img src=" + br[0].restaurant.photos[0].photo.url + "><div>");
            $(".bottomCard1").append("<div class='restName'><strong>" + br[0].restaurant.name + "</strong> <div>");
            $(".bottomCard1").append("<div class='restName'><strong>Hours:</strong>" + br[0].restaurant.timings + "<div>");
            $(".bottomCard1").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[0].restaurant.phone_numbers + "<div>");
            $(".bottomCard1").append("<div class='restName'><strong>Highlights:</strong>" + br[0].restaurant.highlights + "<div>");
            $(".bottomCard1").append(`<button onclick="window.open('${br[0].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 2
            $(".bottomCard2").append("<div><img src=" + br[1].restaurant.photos[1].photo.url + "><div>");
            $(".bottomCard2").append("<div class='restName'><strong>" + br[1].restaurant.name + "</strong> <div>");
            $(".bottomCard2").append("<div class='restName'><strong>Hours:</strong>" + br[1].restaurant.timings + "<div>");
            $(".bottomCard2").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[1].restaurant.phone_numbers + "<div>");
            $(".bottomCard2").append("<div class='restName'><strong>Highlights:</strong>" + br[1].restaurant.highlights + "<div>");
            $(".bottomCard2").append(`<button onclick="window.open('${br[1].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 3
            $(".bottomCard3").append("<div><img src=" + br[2].restaurant.photos[2].photo.url + "><div>");
            $(".bottomCard3").append("<div class='restName'><strong>" + br[2].restaurant.name + "</strong> <div>");
            $(".bottomCard3").append("<div class='restName'><strong>Hours:</strong>" + br[2].restaurant.timings + "<div>");
            $(".bottomCard3").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[2].restaurant.phone_numbers + "<div>");
            $(".bottomCard3").append("<div class='restName'><strong>Highlights:</strong>" + br[2].restaurant.highlights + "<div>");
            $(".bottomCard3").append(`<button onclick="window.open('${br[2].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 4
            $(".bottomCard4").append("<div><img src=" + br[3].restaurant.photos[3].photo.url + "><div>");
            $(".bottomCard4").append("<div class='restName'><strong>" + br[3].restaurant.name + "</strong> <div>");
            $(".bottomCard4").append("<div class='restName'><strong>Hours:</strong>" + br[3].restaurant.timings + "<div>");
            $(".bottomCard4").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[3].restaurant.phone_numbers + "<div>");
            $(".bottomCard4").append("<div class='restName'><strong>Highlights:</strong>" + br[3].restaurant.highlights + "<div>");
            $(".bottomCard4").append(`<button onclick="window.open('${br[3].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 5
            $(".bottomCard5").append("<div><img src=" + br[4].restaurant.photos[4].photo.url + "><div>");
            $(".bottomCard5").append("<div class='restName'><strong>" + br[4].restaurant.name + "</strong> <div>");
            $(".bottomCard5").append("<div class='restName'><strong>Hours:</strong>" + br[4].restaurant.timings + "<div>");
            $(".bottomCard5").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[4].restaurant.phone_numbers + "<div>");
            $(".bottomCard5").append("<div class='restName'><strong>Highlights:</strong>" + br[4].restaurant.highlights + "<div>");
            $(".bottomCard5").append(`<button onclick="window.open('${br[4].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 6
            $(".bottomCard6").append("<div><img src=" + br[5].restaurant.photos[5].photo.url + "><div>");
            $(".bottomCard6").append("<div class='restName'><strong>" + br[5].restaurant.name + "</strong> <div>");
            $(".bottomCard6").append("<div class='restName'><strong>Hours:</strong>" + br[5].restaurant.timings + "<div>");
            $(".bottomCard6").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[5].restaurant.phone_numbers + "<div>");
            $(".bottomCard6").append("<div class='restName'><strong>Highlights:</strong>" + br[5].restaurant.highlights + "<div>");
            $(".bottomCard6").append(`<button onclick="window.open('${br[5].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 7
            $(".bottomCard7").append("<div><img src=" + br[6].restaurant.photos[6].photo.url + "><div>");
            $(".bottomCard7").append("<div class='restName'><strong>" + br[6].restaurant.name + "</strong> <div>");
            $(".bottomCard7").append("<div class='restName'><strong>Hours:</strong>" + br[6].restaurant.timings + "<div>");
            $(".bottomCard7").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[6].restaurant.phone_numbers + "<div>");
            $(".bottomCard7").append("<div class='restName'><strong>Highlights:</strong>" + br[6].restaurant.highlights + "<div>");
            $(".bottomCard7").append(`<button onclick="window.open('${br[6].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 8
            $(".bottomCard8").append("<div><img src=" + br[7].restaurant.photos[7].photo.url + "><div>");
            $(".bottomCard8").append("<div class='restName'><strong>" + br[7].restaurant.name + "</strong> <div>");
            $(".bottomCard8").append("<div class='restName'><strong>Hours:</strong>" + br[7].restaurant.timings + "<div>");
            $(".bottomCard8").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[7].restaurant.phone_numbers + "<div>");
            $(".bottomCard8").append("<div class='restName'><strong>Highlights:</strong>" + br[7].restaurant.highlights + "<div>");
            $(".bottomCard8").append(`<button onclick="window.open('${br[7].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 9
            $(".bottomCard9").append("<div><img src=" + br[8].restaurant.photos[8].photo.url + "><div>");
            $(".bottomCard9").append("<div class='restName'><strong>" + br[8].restaurant.name + "</strong> <div>");
            $(".bottomCard9").append("<div class='restName'><strong>Hours:</strong>" + br[8].restaurant.timings + "<div>");
            $(".bottomCard9").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[8].restaurant.phone_numbers + "<div>");
            $(".bottomCard9").append("<div class='restName'><strong>Highlights:</strong>" + br[8].restaurant.highlights + "<div>");
            $(".bottomCard9").append(`<button onclick="window.open('${br[8].restaurant.menu_url}', '_blank' )">View Menu</button>`);
            // Card 10
            $(".bottomCard10").append("<div><img src=" + br[9].restaurant.photos[9].photo.url + "><div>");
            $(".bottomCard10").append("<div class='restName'><strong>" + br[9].restaurant.name + "</strong> <div>");

            $(".bottomCard10").append("<div class='restName'><strong>Hours:</strong>" + br[9].restaurant.timings + "<div>");
            $(".bottomCard10").append("<div class='restName'><strong>Restaurant Numbers:</strong>" + br[9].restaurant.phone_numbers + "<div>");
            $(".bottomCard10").append("<div class='restName'><strong>Highlights:</strong>" + br[9].restaurant.highlights + "<div>");
            $(".bottomCard10").append(`<button onclick="window.open('${br[9].restaurant.menu_url}', '_blank' )">View Menu</button>`);


            $(".bottomCard10").append("<div class='restName'>" + br[9].restaurant.location.address + "<div>");
            $(".bottomCard10").append("<div class='bottomCardButton'><button>View Details</button><div>");


        });

    };
    // Will call displayRestaurantInfo Function
    displayRestaurantInfo();

    var searchInput = document.getElementById('searchInput');

    function searchAdd() {
        var searchValue = searchInput.value;
        // console.log(searchValue);
    }



    ////////////////////////////////////////////////////////////////////////////////
    /// Map 
    ////////////////////////////////////////////////////////////////////////////////

    ///geo location to recieve current postion
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = 'Geolocation is not supported by this browser.';
        }

    }

    /// function that actaully marks current position
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

            /// turned here-marker image into variable///
            var image = 'assets/images/heremarker.png';
            /// used here-marker image for map marker to show your current location///
            var marker = new google.maps.Marker({
                position: { lat: x, lng: y },
                icon: image,
                zoom: 20,
                map: map
            });
            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            ///This loop was used with the locations array to pull infromation from zomato api in order to have a marker for each location provided by the zomato api/////
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                    map: map
                });

                ///This on click function was used to create info windows for each marker based on locations array, the locations array included the name of the place, rating, and address//
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent('<div>' + '<h1 id=firstHeading class=firstHeading>' + locations[i][2] + '</h1>'
                            + '<div>' + '<h6>Rating:<h6>' + '<h6><strong>' + locations[i][3] + '<img src="assets/images/STAR.png">' + '</strong></h6>' + '</strong>' + '</div>' + '<div>' + '<h6>Address:</h6>' + '<h6><strong>' + locations[i][4] + '</strong>' + '</div>' + '</div>');
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            };
        });
    }
    getLocation();

    var googleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDse6C2zpZnZ0N-ZdhDVsTRmgNyBHlUlM8&libraries=places';

});
////////////////////////////////////////////////////////////////////////////////
/// Map ends here
////////////////////////////////////////////////////////////////////////////////