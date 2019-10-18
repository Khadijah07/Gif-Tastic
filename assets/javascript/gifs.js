


// QUERY FOR GIPHY MAY NEED IF THE TOP DOESN'T WORK // REVISIT 

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonCC + "&api_key=rDgHRz5kV5HjOXeXuPi6x6cRKnBfNHdB";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});



var cartoonCC = [];



function renderButtons() {

    $("#viewGifButton").empty();

    for (i = 0; i < cartoonCC.length; i++) {
        console.log(i, cartoonCC[i]);

        var a = $("<button>");
        // adding a class
        a.addClass("cartoons");
        // adding a data attribute with the value data-name
        a.attr("data-name", cartoonCC[i]);

        a.text(cartoonCC[i]);


        $("#viewGifButton").append(a);

    }
}
// handles the events for the add movie function // 
$("#add-cartoon").on("click", function (event) {

    event.preventDefault();

    // grabs text of what user types into the input field //
    var cartoon = $("#gif-input").val().trim();

    cartoonCC.push(cartoon);

    renderButtons();

});



$("button").on("click", function () {
    var dataCartoon = $(this).attr("data-cartoon");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonCC +
        "&api_key=rDgHRz5kV5HjOXeXuPi6x6cRKnBfNHdB";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var divGif = $("<div>");
                var rating = results[i].rating;

                var p = $("<p>").text("Rating" + rating);

                var cartoonImage = $("<img>");
                cartoonImage.attr("src", results[i].images.fixed_height.url);

                divGif.prepend(p);
                divGif.prepend(cartoonImage);

                $("#viewGifs").prepend(divGif);

            }
        });

});


