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
        $("#media").append("<div><img src="+res.best_rated_restaurant[2].restaurant.photos_url+"><div>");
        
        
    });

};
displayRestaurantInfo();

var searchInput = document.getElementById('searchInput');

function searchAdd() {
    var searchValue = searchInput.value;
    console.log(searchValue);
}




//   "accept": "application/json",
//   "x-requested-with": "xmlhttprequest",
//   "Access-Control-Allow-Origin":"*",