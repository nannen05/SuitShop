// Parallax
$(document).ready(function(){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg-menu').css('top',-(scrolled*0.2)+'px');
};

// show hidden menu
var slide = $(".hidden-menu")
slide.hide();
$(".navbar-brand").click(function(){
  slide.slideToggle('slow' , function() {
    slide.toggleClass('open')
  });

});

// spin hamburger menu
$(".spin").click(function(){
  //alert($("this").css("transform"));
  if ($(this).css("transform") == 'none' ) {
    $(this).css("transform" , "rotate(180deg");
  }
  else {
    $(this).css("transform", "");
  }
});

// show login screen when clicked link
$('.login-link').click(function () {
  $('body').addClass('stop-scrolling');
  $('#splashscreen').css('display', 'block');
});


// hide login screen
$('.login-btn').click(function () {
  $('.login-menu').css('display', 'none');
  $('#splashscreen').fadeOut(500, function() {
    $(this).addClass('position');
  });
  $('body').removeClass('stop-scrolling');
  $('.welcome').addClass('block');
  var name = document.getElementById('name-1');
  name.textContent = 'Welcome ' + 'back '  + $('#name-form').val();
  $('.navbar-fixed-top').css('margin-top', '54px');

  // Menu down on click will hide menu
  slide.slideToggle('slow' ,function ()
  {
    if ($(".hidden-menu").hasClass('open'))
      //slide.slideToggle('slow');
      slide.css('display', 'none');
    else
      slide.css('display', 'none');

  });


});
// remove welcome message and put nav to orginial spot
$(".close-message").click(function(){
  $('.welcome').removeClass('block');
  $('.navbar-fixed-top').css('margin-top', '0px');

});