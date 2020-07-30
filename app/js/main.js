$(function () {

   $(".main-slider__inner").slick({
      nextArrow:
         '<button class="main-slider__arrows main-slider__arrows--next"></button>',
      prevArrow:
         '<button class="main-slider__arrows main-slider__arrows--prev"></button>',
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      // fade: true,
      cssEase: 'linear',
      initialSlide: 1,
   });




   // * --------------------------------------------------------


   $(".app__img").addClass("wow fadeInLeft").attr("data-wow-offset", "200");

   new WOW().init();

});