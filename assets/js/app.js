function displayRestaurantInfo() {

    var queryURL = "https://developers.zomato.com/api/v2.1/location_details?entity_id=276&entity_type=city";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "user-key": "80a859005d228cbe6e5d4de4f886ebe8"
        }
    }).then(function (response) {
        console.log(response);
    });

};
displayRestaurantInfo();


//   "accept": "application/json",
//   "x-requested-with": "xmlhttprequest",
//   "Access-Control-Allow-Origin":"*",