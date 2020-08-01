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

  // search button
  $("#search-btn").click(function(e){
    e.preventDefault();
    // empty the existing gifs
    $(".gif-gallery").empty();
    requestGifs();
  });

  // load more button
  $("#load-more").click(function() {
    var newOffset = parseInt($("form [name='offset']").val()) + 25;
    $("form [name='offset']").val(newOffset);
    requestGifs();
  });

  function onSuccess(json) {
    for(var x=0; x < json.data.length; x++) {
      $(".gif-gallery").append(`<img src="${json.data[x].images.original.url}" width="120" height="120">`);
    }
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status " + status);
    console.dir(xhr);
  }

});
