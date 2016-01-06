$(document).ready(function() {
  console.log("Ready!");
  $('#nav').affix({
        offset: {
          top: Math.round($("#home").height()*2/3)
        }
  }); 
});
