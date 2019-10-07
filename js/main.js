$(document).ready(function(){
  $('.js-slider').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    dots: true
  });
});

$('.js-certificates').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5
});

// Fresco.show('img/mini-sertification-1.jpg'); ???? Не понимаю почему ФРЕСКА не работает, где её тут прописывать