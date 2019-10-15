var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=rDgHRz5kV5HjOXeXuPi6x6cRKnBfNHdB";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});