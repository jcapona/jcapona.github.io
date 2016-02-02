var objArr = [];
objArr.push({title: "Pomodoro Clock", 
            descr: "Small countdown timer.", 
            alt: "Pomodoro Clock", 
            link: "http://codepen.io/jcapona/full/xZEqLv", 
            img: "https://40.media.tumblr.com/6088fe76093db527f3472a7a7ddae49b/tumblr_o0l75dUUf51ugdw86o1_1280.png"});

objArr.push({title: "Simon Game", 
            descr: "Small countdown timer.", 
            alt: "Simon Game", 
            link: "http://codepen.io/jcapona/full/obBEjX", 
            img: "https://41.media.tumblr.com/85304d5fb0bb5bb13921e680e908d951/tumblr_o0kguqFvxC1ugdw86o1_1280.png"});
           
objArr.push({title: "FCC TwitchTV", 
            descr: "Playing with Twitch.TV API", 
            alt: "TwitchTV", 
            link: "http://codepen.io/jcapona/full/xZgGNR", 
            img: "https://41.media.tumblr.com/906c7341b5c9696da52c1d161dba242a/tumblr_o0kguqFvxC1ugdw86o2_1280.png"});

objArr.push({title: "WeatherApp", 
            descr: "Retrieves weather from your city.", 
            alt: "WeatherApp", 
            link: "http://codepen.io/jcapona/full/PZbdpN", 
            img: "https://41.media.tumblr.com/e4e64976fb0dba005adfd3ec846d3f27/tumblr_o0l8381K3D1ugdw86o1_1280.png"});

objArr.push({title: "WikiSearch", 
            descr: "Search in Wikipedia from this web.", 
            alt: "WikiSearch", 
            link: "http://codepen.io/jcapona/full/YwpmNm", 
            img: "https://40.media.tumblr.com/0cbd2ccd319335757f4908bebcf22d84/tumblr_o0l7pkc3WZ1ugdw86o1_1280.png"});
            
objArr.push({title: "Cool Quotes", 
            descr: "Small quote generator", 
            alt: "Cool Quotes", 
            link: "http://codepen.io/jcapona/full/vLXLON", 
            img: "https://40.media.tumblr.com/ea90fddb9c74928ba3e9051e2894bea8/tumblr_o0lajrpKUm1ugdw86o1_1280.png"});
                        
objArr.push({title: "Tic-tac-toe", 
            descr: "Dare you to beat me.", 
            alt: "Tic-tac-toe", 
            link: "http://codepen.io/jcapona/full/pgRezR", 
            img: "https://40.media.tumblr.com/02a4e96acf19a8cb17e9bdb8d45eb634/tumblr_o0ld31pq9B1ugdw86o1_1280.png"});
           
objArr.push({title: "Camper news", 
            descr: "Gets you the latest user posted news from Free Code Camp", 
            alt: "Camper news", 
            link: "http://codepen.io/jcapona/full/OMbqNconsoled", 
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

    html += '<div class="col-xs-6 col-md-4"><div class="portfolio-item"><a href="'+portf.link+'" target="_blank"><div class="portfolio-hover">';
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
        html += '<div class="col-xs-6 col-md-4"><div class="portfolio-item"><a href="'+""+'" target="_blank"><div class="portfolio-hover">';
        html += '<div class="portfolio-hover-content"><div class="portfolio-caption"><h3>'+""+'</h3><p>'+""+'</p></div></div></div>';
        html += '<img src="'+""+'" alt="'+""+'"></a></div></div>';
        j++;
      }
      html += '</div>';
    }
  }
  $("#portf-item").append(html);
  


});



