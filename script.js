var objArr = [];
objArr.push({title: "Pomodoro Clock", 
            descr: "Small countdown timer.", 
            alt: "Pomodoro Clock", 
            link: "http://codepen.io/jcapona/full/xZEqLv", 
            img: "https://41.media.tumblr.com/e6c95026e7f1f8670d3ae8dc5a974b5f/tumblr_o0jnodHdTv1ugdw86o6_640.png"});

objArr.push({title: "Simon Game", 
            descr: "Small countdown timer.", 
            alt: "Simon Game", 
            link: "http://codepen.io/jcapona/full/obBEjX", 
            img: "https://40.media.tumblr.com/2e1de5d17e878017a1724b7cf0241e85/tumblr_o0jnodHdTv1ugdw86o2_1280.png"});
           
objArr.push({title: "FCC TwitchTV", 
            descr: "Playing with Twitch.TV API", 
            alt: "TwitchTV", 
            link: "http://codepen.io/jcapona/full/xZgGNR", 
            img: "https://41.media.tumblr.com/7f5b9dcf404b72bba0ed04dc15ab9f02/tumblr_o0jnodHdTv1ugdw86o8_640.png"});

objArr.push({title: "WeatherApp", 
            descr: "Retrieves weather from your city.", 
            alt: "WeatherApp", 
            link: "http://codepen.io/jcapona/full/PZbdpN", 
            img: "https://40.media.tumblr.com/cad7f0c314d2ca29ed2fd433949c9c8d/tumblr_o0jnodHdTv1ugdw86o7_640.png"});

objArr.push({title: "WikiSearch", 
            descr: "Search in Wikipedia from this web.", 
            alt: "WikiSearch", 
            link: "http://codepen.io/jcapona/full/YwpmNm", 
            img: "https://40.media.tumblr.com/de3b36dea517efd4d8dcb8cb0607b5a4/tumblr_o0jnodHdTv1ugdw86o4_640.png"});
            
objArr.push({title: "Cool Quotes", 
            descr: "Small quote generator", 
            alt: "Cool Quotes", 
            link: "http://codepen.io/jcapona/full/vLXLON", 
            img: "https://41.media.tumblr.com/987a9bfbbaa4f8105076e7ab85ef1f46/tumblr_o0jnodHdTv1ugdw86o5_1280.png"});
                        
objArr.push({title: "Tic-tac-toe", 
            descr: "Dare you to beat me.", 
            alt: "Tic-tac-toe", 
            link: "http://codepen.io/jcapona/full/pgRezR", 
            img: "https://40.media.tumblr.com/318748c9b0e8792af968f4b3e74f4278/tumblr_o0jve67Vh51ugdw86o1_540.png"});
            
objArr.push({title: "Camper news", 
            descr: "Gets you the latest user posted news from Free Code Camp", 
            alt: "Camper news", 
            link: "http://codepen.io/jcapona/full/OMbqNd", 
            img: "https://40.media.tumblr.com/1fb6ff788b9ab41a4b01b0e8f438f512/tumblr_o0jnodHdTv1ugdw86o1_1280.png"});  
      
      
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

  // Loads portfolio section
  var html = "";
  var num = 0;
  var rest = objArr.length > 3? (objArr.length)%3 : 3%objArr.length;
  for(var i = 0; i < objArr.length; i++)
  {
    var portf = objArr[i];

    if(num === 0)
      html += '<div class="row">';

    html += '<div class="col-md-4"><div class="portfolio-item"><a href="'+portf.link+'" target="_blank"><div class="portfolio-hover">';
    html += '<div class="portfolio-hover-content"><div class="portfolio-caption"><h3>'+portf.title+'</h3><p>'+portf.descr+'</p></div></div></div>';
    html += '<img src="'+portf.img+'" alt="'+portf.alt+'"></a></div></div>';

    if((num === 2))
    {
      num = 0;
      html += '</div>';
    }
    else
      num++;
      
    if((i==objArr.length-1)&&(rest!=0))
    { 
      var j=1;
      while(j<=3-rest)
      {
        html += '<div class="col-md-4"><div class="portfolio-item"><a href="'+""+'" target="_blank"><div class="portfolio-hover">';
        html += '<div class="portfolio-hover-content"><div class="portfolio-caption"><h3>'+""+'</h3><p>'+""+'</p></div></div></div>';
        html += '<img src="'+""+'" alt="'+""+'"></a></div></div>';
        j++;
      }
      html += '</div>';
    }
  }
  $("#portf-item").append(html);
  


});



