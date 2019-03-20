// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET" ,
      success: function(response) {
          $(".gallery").append("<img src=" +response.data[7].images.fixed_width.url+ ">")
      }
  })
  
  
});

//"https://giphy.com/gifs/puppy-bed-1TmrEqADCCCS4"