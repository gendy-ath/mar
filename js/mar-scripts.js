
/*
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 992px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
  }
  
  // media query change
  function WidthChange(mq) {
  if (mq.matches) {
    console.log('inhalt-992');
    $('.radio-text').text('mouni');
  
  // window width is at least 992px

  } else {
  // window width is less than 992px
  console.log('mobile-logo');
  $('.radio-text').text('poutses');

  }
  
  }
*/


$(window).scroll(function(){
  if($(document).scrollTop() > 300) {
      $('.post-asrtist-name').css('font-size', '2rem');
      $('.post-title').css('font-size', '2rem');
  } else {
      $('.post-asrtist-name').css('font-size', '3rem');
      $('.post-title').css('font-size', '3rem');
  }
});




var prevScrollpos = window.pageYOffset;
$(window).scroll(function(){
  if (window.matchMedia("(min-width: 992px)").matches) {
  var headerMainJs = $('#stream-bar-component').height();
  var navOffsetGeneralScroll = $('#general-header').height();

var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('.carousel-nanoBar').css('top',navOffsetGeneralScroll);
    $('.js-post-header').css('top', '0px');
    $('#menu-bar-component').css('margin-top', '0px');
    $('.sticky-top-offset').css('top',navOffsetGeneralScroll);
    $('.general-top').css('top',navOffsetGeneralScroll);
    
   
  } else {
    $('.carousel-nanoBar').css('top',headerMainJs +17);
    $('.js-post-header').css('top', -headerMainJs);
    $('#menu-bar-component').css('margin-top', '-50px');
    $('.sticky-top-offset').css('top',navOffsetGeneralScroll);
    $('.general-top').css('top',navOffsetGeneralScroll);
    
    
  }
}
if (window.matchMedia("(max-width: 991px)").matches) {
  $('.sticky-top-offset').addClass('mobile-offset');
}
  
  prevScrollpos = currentScrollPos;
});





$(document).ready(function(){

  var navOffsetGeneral = $('#general-header').height();
  
  
  /*
  $('.carousel-nanoBar').css('top',navOffsetGeneral);
  */
  $('.post-page').css('margin-top',navOffsetGeneral);
  $('.category-page').css('margin-top',navOffsetGeneral);
 
  $('.detach-hero').css('top',navOffsetGeneral * 2);

  });


  

$(window).scroll(function() {
  var carouselHeight = $('#carouselRadio').height();
  var headerNav = $('#general-header').height();
  var height = $(window).scrollTop();
  if (height > carouselHeight - headerNav ) {
       $(".carousel-nanoBar").addClass("nanoBar-hide");
  } else {
     $('.carousel-nanoBar').removeClass('nanoBar-hide');
  }


});


$(document).ready(function(){
 
    
  $("#collapseInfo").on('shown.bs.collapse', function(){
    $('#infoLink').addClass('active-info')
  });
  $("#collapseInfo").on('hidden.bs.collapse', function(){
    $('#infoLink').removeClass('active-info')
  });
   
  $("#collapseShows").on('shown.bs.collapse', function(){
    $('#showsLink').addClass('active-link')
    $('#showsLink i').removeClass('fa-rotate-90')
    $('body').addClass('overflow-none')
    
  });

  $("#collapseArtists").on('shown.bs.collapse', function(){
      $('#artistsLink').addClass('active-link')
      $('#artistsLink i').removeClass('fa-rotate-90')
      $('body').addClass('overflow-none')
      
    });
    $("#collapseManifesto").on('shown.bs.collapse', function(){
      $('#manifestoLink').addClass('active-link')
      $('body').addClass('overflow-none')
     
      
    });
    $("#collapseManifesto").on('shown.bs.collapse', function(){
      $('#manifestoLink2').addClass('active-link')
      $('#manifestoLink2 i').removeClass('fa-rotate-90')
      $('body').addClass('overflow-none')
      
    });

  $("#collapseShows").on('hidden.bs.collapse', function(){
    $('#showsLink').removeClass('active-link')
    $('#showsLink i').addClass('fa-rotate-90')
    $('body').removeClass('overflow-none')
  
  });

  $("#collapseArtists").on('hidden.bs.collapse', function(){
      $('#artistsLink').removeClass('active-link')
      $('#artistsLink i').addClass('fa-rotate-90')
      $('body').removeClass('overflow-none')
    
    });
    $("#collapseManifesto").on('hidden.bs.collapse', function(){
      $('#manifestoLink').removeClass('active-link')
      $('body').removeClass('overflow-none')
      
    
    });
    $("#collapseManifesto").on('hidden.bs.collapse', function(){
      $('#manifestoLink2').removeClass('active-link')
      $('#manifestoLink2 i').addClass('fa-rotate-90')
      $('body').removeClass('overflow-none')
    
    });

    /*Nav Bar Collapse Mobeile Burger */

   $("#navbarNavDropdown").on('shown.bs.collapse', function(){
    $('.burger-icon').addClass('invisible')
    $('.burger-icon-close').removeClass('invisible')
    
  });
  $("#navbarNavDropdown").on('hidden.bs.collapse', function(){
    $('.burger-icon').removeClass('invisible')
    $('.burger-icon-close').addClass('invisible')
    
  });
});




4

/*

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 1080) {
      $(".header-menu").addClass("darkHeader");
  } else {
      $(".header-menu").removeClass("darkHeader");
  }
});
*/
/*

$(document).ready(function(){
  // Add scrollspy to <body>
 

  // Add smooth scrolling on all links inside the navbar
  $("#navbarNavDropdown a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var navOffset = $('#general-header').height();
   

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navOffset 
      }, 800, function(){
          
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
      console.log(navOffset);
    }  // End if
  });
});

*/


/*Radio Player Functions */
$(document).ready(function(){


  var audio = document.getElementById("player");
  
  
  audio.muted = false;

$("#live-button").click( function (){
  if(audio.paused){
    audio.play();
    
    
   
   
    console.log('is playing');
    $('.stop-icon').removeClass('invisible');
    $('.play-icon').addClass('invisible');
    $('.radio-text').text('On air...');
    $('.pulsate-css').removeClass('invisible');
    
    
  } else {
    audio.pause();
   
    $('.play-icon').removeClass('invisible');
    $('.stop-icon').addClass('invisible');
    $('.radio-text').text('Tune Now');
    $('.pulsate-css').addClass('invisible');
    console.log('paused');
    
   
  }
});

$("#sound-button").click( function (){
  if(audio.muted){
    
    audio.volume = 1;
   
    console.log('volume 1');
    $('.sound-icon').removeClass('invisible');
    $('.mute-icon').addClass('invisible');
    audio.muted = false;
    
  } else {
    audio.volume = 0;
    console.log('is Muted');
    $('.mute-icon').removeClass('invisible');
    $('.sound-icon').addClass('invisible');
    audio.muted = true;
    
    
  }
});


});

$(document).ready(function(){

/*Carousel */
$('.carousel').on('slid.bs.carousel', function () {
    console.log('slide finished!!!');   
   
})
});







/*
function inhaltFunction() {



const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
const millis = Date.now() - start;

console.log(`seconds elapsed = ${Math.floor(millis/1000)} s`);
// expected output : seconds elapsed = 2
}, 5000);


}
*/