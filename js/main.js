"use strict"



$(document).ready(function () {

  var topBar = $('.topbar')

  $(window).scroll(function () {

    if ($(window).scrollTop() > 200) {

      $('.header').addClass('sticky');

      topBar.hide()

    }



    else {

      $('.header').removeClass('sticky');

      topBar.show()



    }



  });

});



$(document).ready(function () {

  $('.menu ul li').click(function () {



    $('.menu ul li').removeClass('active');



    $(this).addClass('active');


  });


});

$(document).ready(function () {
  if ($(window).width() < 992) {
    $('.click-btn').click(function () {

      var submenu = $(this).next('.sub-menu');

      submenu.slideToggle();

      $('.sub-menu').not(submenu).slideUp();
    })
  }
});

// $(document).ready(function () {
//   $('.slider').slick({

//     dots: false,

//     infinite: true,

//     arrows: false,

//     speed: 1500,

//     cssEase: 'linear',

//     autoplay: true,

//     autoplaySpeed: 2000,

//     slidesToShow: 1,

//     slidesToScroll: 1,

//     draggable: true,


//   });

// })

$('.menu-btn').click(function (e) {
  e.preventDefault();
})

$('.popup-btn').click(function (e) {
  e.preventDefault();
})

$('.service-quote-btn').click(function (e) {
  e.preventDefault();
})


$(document).ready(function () {
  var $productSlider = $('.product-slider');

  $productSlider.slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev-product"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="next-product"><i class="fa-solid fa-arrow-right"></i></span>',
    infinite: false,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    drgabble: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Initially disable the prev button and next button
  $('.prev-product').prop('disabled', true).css('pointer-events', 'none').fadeTo(0, 0.5);
  $('.next-product').prop('disabled', false).css('pointer-events', 'auto').fadeTo(0, 1);

  // Listen for the 'afterChange' event to enable/disable the prev and next buttons
  $productSlider.on('afterChange', function (event, slick, currentSlide) {
    // Disable prev button if on the first slide
    if (currentSlide === 0) {
      $('.prev-product').prop('disabled', true).css('pointer-events', 'none').fadeTo(200, 0.5);  // Fade out
    } else {
      $('.prev-product').prop('disabled', false).css('pointer-events', 'auto').fadeTo(200, 1);  // Fade in
    }

    // Disable next button if on the last slide
    if (currentSlide === slick.slideCount - 1) {
      $('.next-product').prop('disabled', true).css('pointer-events', 'none').fadeTo(200, 0.5);  // Fade out
    } else {
      $('.next-product').prop('disabled', false).css('pointer-events', 'auto').fadeTo(200, 1);  // Fade in
    }
  });
});

$(document).ready(function () {
  var $blogSlider = $('.blog-slider');

  $blogSlider.slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev-product blog-prev"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="next-product blog-next"><i class="fa-solid fa-arrow-right"></i></span>',
    infinite: false,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    drgabble: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Initially disable the prev button and next button
  $('.blog-prev').prop('disabled', true).css('pointer-events', 'none').fadeTo(0, 0.5);
  $('.blog-next').prop('disabled', false).css('pointer-events', 'auto').fadeTo(0, 1);

  // Listen for the 'afterChange' event to enable/disable the prev and next buttons
  $blogSlider.on('afterChange', function (event, slick, currentSlide) {
    // Disable prev button if on the first slide
    if (currentSlide === 0) {
      $('.blog-prev').prop('disabled', true).css('pointer-events', 'none').fadeTo(200, 0.5);  // Fade out
    } else {
      $('.blog-prev').prop('disabled', false).css('pointer-events', 'auto').fadeTo(200, 1);  // Fade in
    }

    // Disable next button if on the last slide
    if (currentSlide === slick.slideCount - 1) {
      $('.blog-next').prop('disabled', true).css('pointer-events', 'none').fadeTo(200, 0.5);  // Fade out
    } else {
      $('.blog-next').prop('disabled', false).css('pointer-events', 'auto').fadeTo(200, 1);  // Fade in
    }
  });
});

$(document).ready(function () {
  function sliceAllParagraphshead(start, end) {
    let dot = '...';
    let paragraphs = document.querySelectorAll(".blog-text h3 a")
    paragraphs.forEach((paragraph) => {
      let paragraphText = paragraph.textContent;
      let slicedText = paragraphText.slice(start, end);
      slicedText += dot;
      paragraph.textContent = slicedText;
    })
  }

  sliceAllParagraphshead(0, 40); // Slice all paragraphs directly

  function sliceAllParagraphs(start, end) {
    let dot = '...';
    let paragraphs = document.querySelectorAll(".blog-text p")
    paragraphs.forEach((paragraph) => {
      let paragraphText = paragraph.textContent;
      let slicedText = paragraphText.slice(start, end);
      slicedText += dot;
      paragraph.textContent = slicedText;
    })
  }

  sliceAllParagraphs(0, 100); // Slice all paragraphs directly

});


var scrollToTop = document.querySelector('.scroll_top');

let calcScrollValue = () => {
  let pos = window.scrollY;
  let calcHeight = document.documentElement.scrollHeight - window.innerHeight;
  let percentVal = Math.round((pos / calcHeight) * 100);

  if (percentVal === 0) {
    scrollToTop.style.background = 'var(--primary-color)';
    scrollToTop.style.border = '2px solid var(--tertiary-color)';
  } else {
    scrollToTop.style.background = 'var(--tertiary-color)';
    scrollToTop.style.border = `2px solid transparent`;
    scrollToTop.style.backgroundImage = `conic-gradient(#95a3f3 ${percentVal}%, var(--tertiary-color) ${percentVal}%)`;
    scrollToTop.style.backgroundOrigin = 'border-box';
    scrollToTop.style.backgroundClip = 'padding-box, border-box';
  }
};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);


$(document).ready(function () {

  function startCounterAnimation() {
    $('.about-count').each(function () {
      var $this = $(this);
      var targetNum = parseInt($this.text(), 10);
      $({ count: 0 }).animate({
        count: targetNum
      },
        {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.count));
          },
          complete: function () {
            $this.text(targetNum);
          }
        });
    });
  }

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  var observer = new IntersectionObserver(callback, options);

  var targetBox = document.querySelector('.about-counter-box');

  if (targetBox) { // Check if targetBox is not null
    observer.observe(targetBox);
  }

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        startCounterAnimation();
      }
    });
  }
});


$(document).ready(function () {

  $('.popup-select-box').select2({
    dropdownParent: $('#home-popup')
  });

});

$(document).ready(function () {
  $('.offcanvas-body .menu-btn a').click(function () {
    $('.offcanvas').offcanvas('hide');
  })
})


