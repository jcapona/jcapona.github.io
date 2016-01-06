$(document).ready(function() {
  console.log("Ready!");
  $('#nav').affix({
        offset: {
          top: $("#home").height()/2
        }
  }); 
});
