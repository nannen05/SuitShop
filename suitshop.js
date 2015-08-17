$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg-menu').css('top',-(scrolled*0.2)+'px');
};

$(".hidden-menu").hide();
$(".navbar-brand").click(function(){
  $(".hidden-menu").slideToggle('slow');
  // $("a.navbar-brand img").addClass("spin").removeClass("spin");
});

$(".spin").click(function(){
  //alert($("this").css("transform"));
  if ($(this).css("transform") == 'none' ) {
    $(this).css("transform" , "rotate(180deg");
  }
  else {
    $(this).css("transform", "");
  }
});