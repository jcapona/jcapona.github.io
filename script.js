$(document).ready(function() {
  $('#nav').affix({
        offset: {
          top: $("#home").height()
        }
  });
  
  $('body').scrollspy({target: ".nav-buttons", offset: 50});   

  $(".nav-buttons a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });

});
