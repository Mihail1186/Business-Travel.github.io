$(document).ready(function () {
   $('.slider__item').slick({
      arrows: true,
      dots: true,
      adaptiveHeigh: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 2000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
   });
});