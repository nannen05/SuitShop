var loggedIn = false;
var menuOpen = $('.welcome');
var messageMenu = false;
//var closeMessage= false;

function spinImage(){
  if ($(".spin").css("transform") == 'none' ) {
    $(".spin").css("transform" , "rotate(180deg");
  }
  else {
    $(".spin").css("transform", "");
  }
};

function addToCart() {
  $('.add-to-cart').css('display', 'block');
}

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg-menu').css('top',-(scrolled*0.2)+'px');
};

function nameMessage(){
  // Take name from form and add to message block
  var name = document.getElementById('name-1');
  name.textContent = 'Welcome ' + 'back '  + $('#name-form').val();
  $('.navbar-fixed-top').css('margin-top', '44px');
  messageMenu = true;
};

function loggedInMessage() {
  var name = document.getElementById('name-1');
  name.textContent = 'Your ' + 'arleady ' + 'logged ' + 'in '  + $('#name-form').val();
  $('.navbar-fixed-top').css('margin-top', '44px');
  messageMenu = true;
}

function hideLogin() {
  // Remove splash screen
  $('.login-menu').css('display', 'none');
  $('#splashscreen').fadeOut(500, function() {
    $(this).addClass('position');
  });
  $('body').removeClass('stop-scrolling');
  $('.welcome').addClass('block');
};

function menuHide() {
  // Menu down on click will hide menu
  slide.slideToggle('slow' ,function ()
  {
    if ($(".hidden-menu").hasClass('open'))
    //slide.slideToggle('slow');
      slide.css('display', 'none');
    else
      slide.css('display', 'none');

  });
};

function newUser () {
  $('.new-user-form').css('display', 'block');
  $('.login-form').css('display', 'none');
};

$('.new-btn').click(function(){
  newUser();
});

// Parallax
$(document).ready(function(){
  parallax();


});

// spin hamburger menu
$(".spin").click(function(){

  if (messageMenu) {
    $('.hidden-menu').css('margin-top', '101px');
    spinImage();
    console.log('Hello');
  }
  else {
    //closeMessage = true;
    //messageMenu = true;
    $('.hidden-menu').css('margin-top', '59px');
    spinImage();
    console.log('No');
  };
});

// show login screen when clicked link
$('.login-link').click(function () {
  if (loggedIn) {
    loggedInMessage();
    menuHide();
    $('.welcome').addClass('block');
  }
  else {
    $('body').addClass('stop-scrolling');
    $('#splashscreen').css('display', 'block');
  };
});


// show hidden menu
var slide = $(".hidden-menu")
slide.hide();
$(".navbar-brand").click(function(){
  slide.slideToggle('slow' , function() {
    slide.toggleClass('open')
  });
  menuOpen.toggleClass('open');
});

// hide login screen
$('.login-btn').click(function () {
  loggedIn = true;
  hideLogin();
  nameMessage();
  menuHide();
});

// remove welcome message and put nav to orginial spot
$(".close-message").click(function(){
  $('.welcome').removeClass('block');
  $('.navbar-fixed-top').css('margin-top', '0px');
  console.log('close');
  //messageMenu = false;
  if (messageMenu = false) {
    $('.hidden-menu').css('margin-top', '101px');

  }
  else {

    $('.hidden-menu').css('margin-top', '59px');
  };
  //menuHide();

});

$('.cart').click(function() {
  addToCart();


});
//hide products in cart dropwdown

function hideProductDrop(){
  ('.product1').remove();
};


$('.trash-icon').mouseover(function(){
  hideProductDrop();
});