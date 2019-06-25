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
        $(".bottomCard").append("<div><img src="+res.best_rated_restaurant[3].restaurant.photos[1].photo.url+"><div>");
        $(".bottomCard").append("<div class='restName'><strong>"+res.best_rated_restaurant[3].restaurant.name+"</strong> <div>");
        $(".bottomCard").append("<div class='restName'>"+res.best_rated_restaurant[3].restaurant.location.address+"<div>");
        $(".bottomCard").append("<div class='bottomCardButton'><button>View Details</button><div>");
        // $(".bottomCard").append("<div><img src="+res.best_rated_restaurant[2].restaurant.featured_image+"><div>");
        
        
    });

};
displayRestaurantInfo();

var searchInput = document.getElementById('searchInput');

function searchAdd() {
    var searchValue = searchInput.value;
    // console.log(searchValue);
}




//   "accept": "application/json",
//   "x-requested-with": "xmlhttprequest",
//   "Access-Control-Allow-Origin":"*",