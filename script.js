var objArr = [];
objArr.push({title: "IPROC", 
            descr: "IPROC landing page", 
            alt: "IPROC", 
            link: "http://www.iproc.co", 
            img: "https://40.media.tumblr.com/27271c983cbfe310911c65e2dd829281/tumblr_o2lpryvt4O1ugdw86o1_1280.png"});

objArr.push({title: "QuickPoll", 
            descr: "App to make online polls", 
            alt: "QuickPoll", 
            link: "http://quick-poll.herokuapp.com", 
            img: "https://41.media.tumblr.com/ea9b77885b925e4548680619fa03f296/tumblr_o2lq03BaaQ1ugdw86o1_1280.png"});

objArr.push({title: "Mini Calq", 
            descr: "Small calculator", 
            alt: "Mini Calq", 
            link: "http://codepen.io/jcapona/full/xZEJvm", 
            img: "https://40.media.tumblr.com/37845fbfc15e81ef1a2034b00e3462c7/tumblr_o1xq2cafNl1ugdw86o1_1280.png"});

objArr.push({title: "WikiSearch", 
            descr: "Search in Wikipedia from this web.", 
            alt: "WikiSearch", 
            link: "http://codepen.io/jcapona/full/YwpmNm", 
            img: "https://40.media.tumblr.com/0cbd2ccd319335757f4908bebcf22d84/tumblr_o0l7pkc3WZ1ugdw86o1_1280.png"});

objArr.push({title: "Pomodoro Clock", 
            descr: "Small countdown timer.", 
            alt: "Pomodoro Clock", 
            link: "http://codepen.io/jcapona/full/xZEqLv", 
            img: "https://40.media.tumblr.com/6088fe76093db527f3472a7a7ddae49b/tumblr_o0l75dUUf51ugdw86o1_1280.png"});

objArr.push({title: "Tic-tac-toe", 
            descr: "Dare you to beat me.", 
            alt: "Tic-tac-toe", 
            link: "http://codepen.io/jcapona/full/pgRezR", 
            img: "https://40.media.tumblr.com/02a4e96acf19a8cb17e9bdb8d45eb634/tumblr_o0ld31pq9B1ugdw86o1_1280.png"});

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

objArr.push({title: "Cool Quotes", 
            descr: "Small quote generator", 
            alt: "Cool Quotes", 
            link: "http://codepen.io/jcapona/full/vLXLON", 
            img: "https://40.media.tumblr.com/ea90fddb9c74928ba3e9051e2894bea8/tumblr_o0lajrpKUm1ugdw86o1_1280.png"});
           
objArr.push({title: "Camper news", 
            descr: "Gets you the latest user posted news from Free Code Camp", 
            alt: "Camper news", 
            link: "http://codepen.io/jcapona/full/OMbqNd", 
            img: "https://40.media.tumblr.com/1fb6ff788b9ab41a4b01b0e8f438f512/tumblr_o0jnodHdTv1ugdw86o1_1280.png"});  


var objArrPhot = [];
objArrPhot.push({title: "Colors", 
            descr: "", 
            alt: this.title, 
            link: "https://www.flickr.com/photos/jcapona/21556334315/", 
            img: "https://farm6.staticflickr.com/5729/21556334315_42c915a92c_c.jpg"});
objArrPhot.push({title: "Vintage", 
            descr: "", 
            alt: this.title, 
            link: "https://www.flickr.com/photos/jcapona/22754772210/in/dateposted-public/", 
            img: "https://farm6.staticflickr.com/5635/22754772210_bc285f4e64_c.jpg"});
objArrPhot.push({title: "Life & Death", 
            descr: "", 
            alt: this.title, 
            link: "https://www.flickr.com/photos/jcapona/23368870911/", 
            img: "https://farm1.staticflickr.com/671/23368870911_598a5d3a5f_c.jpg"});
objArrPhot.push({title: "Handpainted clouds", 
            descr: "", 
            alt: this.title, 
            link: "https://www.flickr.com/photos/jcapona/22760411739/", 
            img: "https://farm6.staticflickr.com/5683/22760411739_a6e9fdb170_c.jpg"});
objArrPhot.push({title: "Dock", 
            descr: "", 
            alt: this.title, 
            link: "https://www.flickr.com/photos/jcapona/16399842067/", 
            img: "https://farm9.staticflickr.com/8569/16399842067_1e2fc6a0bb_c.jpg"});
objArrPhot.push({title: "Cartagena's night", 
            descr: "", 
            alt: this.title, 
            link: "https://www.flickr.com/photos/jcapona/16818097418/", 
            img: "https://farm9.staticflickr.com/8689/16818097418_3d2e11b5fb_c.jpg"});



$(document).ready(function() {
  $('#nav').affix({
        offset: {
          top: $("#home").height()/2
        }
  });
  
  $('body').scrollspy({target: "#nav-btns", offset: 70});
  
  $(".arrow").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top-70
    }, 1000, function(){
      window.location.hash = hash;
    });
  });

  $(".nav-buttons a").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top-70
    }, 1000, function(){
      window.location.hash = hash;
    });
  });

  $(".nav-buttons2 a").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top-70
    }, 1000, function(){
      window.location.hash = hash;
    });
  });

  // Load portfolio sections
  loadPortfolio(objArr, function html(code){$("#portf-item").append(code);});
  loadPortfolio(objArrPhot, function html(code){$("#portf-item-phot").append(code);});
  
  // Portfolio hover effects
  $('.thumbnail').hover(
    function(){
      $(this).find('.caption').fadeIn(400);
    },
    function(){
      $(this).find('.caption').fadeOut(400);
    }
  ); 

});



function loadPortfolio(objArr, callback)
{
  // Loads portfolio section
  var html = "";
  var num = 0;
  var rest = objArr.length > 3? (objArr.length)%3 : 3%objArr.length;
  for(var i = 0; i < objArr.length; i++)
  {
    var portf = objArr[i];

    if(num === 0)
      html += '<div class="row">';

    html += '<div class="col-xs-12 col-md-4">';
      html += '<div class="thumbnail">';
          html += '<div class="caption">';
            html += '<h3>'+portf.title+'</h3>';
            html += '<p>'+portf.descr+'</p>';
            html += '<p><a href="'+portf.link+'" target="_blank" class="btn btn-danger" rel="tooltip" title="View">View</a></p>';
          html += '</div>';
          html += '<img class="img-responsive" src="'+portf.img+'" alt="'+portf.alt+'">';
        html += '</div>';
    html += '</div>';

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
        html += '<div class="col-xs-12 col-md-4">';
        html += '</div>';
        j++;
      }
      html += '</div>';
    }
  }
  callback(html);
}



