//remaining slider function
$remainingSlider = false;
function remainingSlider(){
  if($(window).width() < 1511){
    if(!$remainingSlider){
      $(".JS-remaining-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        autoplay: true,
        appendDots: $('.JS-remaining-dots'),
        variableWidth: true,
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              variableWidth: false,
            }
          }
        ]
      });
      $remainingSlider = true;
    }
  } else if($(window).width() >= 1529){
    if($remainingSlider){
      $('.JS-remaining-slider').slick('unslick');
      $remainingSlider = false;
    }
  }
};

//popular slider function
$popularSlider = false;
function popularSlider(){
  $(".JS-popular-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    appendArrows: $('.JS-popular-arrows'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
};

//search slider function
$searchSlider = false;
function searchSlider(){
  $(".JS-search-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    appendArrows: $('.JS-search-arrows'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
};

//search active an focus function
function toggleFocus(e){
  if ($(window).width() >= 768) {
    if( e.type == 'focus' ){ 
      $('.JS-search-form').addClass('active');
    }
    else{
      $('.JS-search-form').removeClass('active');
    }
  } 
};

$(document).ready(function () {
  //scroll animation
  AOS.init();
  window.addEventListener('load', AOS.refresh);

  //toggle active class on tabs in hero
  $('.JS-order-tab').click(function(){
    if(!$(this).hasClass('active')) {
      $('.JS-order-tab.active').removeClass('active');
      $(this).addClass('active');
    }
  });

  // remaining slider
  remainingSlider();

  // popular slider
  popularSlider();

  // search slider
  searchSlider();

  // cities select in footer
  $('.JS-cities-select').select2({
    minimumResultsForSearch: Infinity
  });

  // search input active class on focus
  $('.JS-search-input').on('focus blur', toggleFocus);

  //mobile search show/hide
  $('.JS-search-toggle').on('click', function(){
    $('.JS-search-form').toggleClass('active');
  });
});

$(window).on('resize', function(){
  // remaining slider
  remainingSlider();
});