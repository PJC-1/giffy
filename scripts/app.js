$(document).on("ready", function(){

  $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
  });

  $(".btn").click(function(e){
    console.log("button clicked");
    e.preventDefault();
    var q = $("form").serialize();
    console.log("form data: ", q);
  });

  function onSuccess(json) {
    console.log(json);
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status " + status);
    console.dir(xhr);
  }

});
