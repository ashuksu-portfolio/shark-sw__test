$(function () {

   $(".feedback__slider").slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      // fade: true,
      cssEase: 'linear'
   });


   // * --------------------------------------------------------


   $(".app__img").addClass("wow fadeInLeft").attr("data-wow-offset", "200");

   new WOW().init();

});