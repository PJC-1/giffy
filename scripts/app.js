$(document).on("ready", function(){

  function requestGifs() {
    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    });
  }

  // initial request to display gifs on page load
  requestGifs();

  $(".btn").click(function(e){
    e.preventDefault();
    // first empty the existing gifs
    $(".gif-gallery").empty();
    requestGifs();
  });

  function onSuccess(json) {
    console.log(json);
    for(var x=0; x < json.data.length; x++) {
      console.log("gif url from json: " + json.data[x].images.original.url);
      $(".gif-gallery").append(`<img src="${json.data[x].images.original.url}" width="100" height="100">`);
    }
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status " + status);
    console.dir(xhr);
  }

});
