$(function () {

   $(".main-slider").slick({
      nextArrow:
         '<button class="main-slider__arrows main-slider__arrows--next"></button>',
      prevArrow:
         '<button class="main-slider__arrows main-slider__arrows--prev"></button>',
      // centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      // slidesToShow: 1,
      // fade: true,
      cssEase: 'linear',
      initialSlide: 1,

   });


   $(".why__slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
   });


   $(".ourclients__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      dots: false,
      responsive: [
         {
            breakpoint: 1090,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 920,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 730,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 565,
            settings: {
               slidesToShow: 2,
            }
         },

         {
            breakpoint: 391,
            settings: {
               slidesToShow: 1,
               adaptiveHeight: true,
               centerMode: true,
               variableWidth: true,
               autoplay: true,
               autoplaySpeed: 1500,
               infinite: true,
               speed: 600,
               // adaptiveHeight: true,
            }
         }
      ]

   });


   // * --------------------------------------------------------


   $(".skills__progress").each(function () {
      var $bar = $(this).find(".skills__bar");
      var $val = $(this).find("span");
      var perc = parseInt($val.text(), 10);

      $({ p: 0 }).animate({ p: perc }, {
         duration: 3000,
         easing: "swing",
         step: function (p) {
            $bar.css({
               transform: "rotate(" + (45 + (p * 1.8)) + "deg)",
            });
            $val.text(p | 0);
         }
      });
   });



   // * --------------------------------------------------------


   $('.header__menu-btn').on('click', function () {
      $('.menu__list').slideToggle();
      $(this).toggleClass('rotate');

   });


   // * --------------------------------------------------------


   $(".app__img").addClass("wow fadeInLeft").attr("data-wow-offset", "200");

   new WOW().init();

});