
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 15;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu1, #mobile-nav, #small-menu');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
          main_nav.find('a').removeClass('active');

        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');

      }
      if (cur_pos < 300) {
        $(".nav-menu1 ul:first li:first").addClass('active');
      }

    });
  });


   // Main  header
   $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Brand Footer on Index page
  $(window).scroll(function() {
  if ($(this).scrollTop() > 80) {
    $('#brand').hide();
  } else {
    $('#brand').show();
  }
});

  // Need to Verify
  if ($(window).scrollTop() > 80) {
    $('#header').addClass('header-scrolled');
    
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('.contact-button').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('.contact-button').fadeOut('slow');
    }
  });


  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


   // Events isotope and filter
   $(window).on('load', function() {
    var eventsIsotope = $('.events-container').isotope({
      itemSelector: '.events-item',
      layoutMode: 'fitRows'
    });

    $('#events-flters li').on('click', function() {
      $("#events-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      eventsIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  //  Default carousel 
$(".default-carousel").owlCarousel({
  autoplay: true,
  nav: true,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 3
    }
  }
  });

  //  Bravo steel products carousel 
$(".bravo-products-carousel").owlCarousel({
  autoplay: false,
  nav: false,
  loop: true,
  dots: true,
  items: 1
  });

  //  Blog carousel 
$(".blog-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    900: {
      items: 2
    }
  }
  });
  
  //  event carousel 
  $(".event-carousel ").owlCarousel({
    autoplay: true,
    nav: false,
    loop: true,
    dots: true,
    items: 1
    });

//  rainforest carousel 
$(".rainforest-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 1
    }
  }
  });
  

    //  Default carousel 
$(".affilations-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    968: {
      items: 2
    },
    1180: {
      items: 3
    }
  }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

//  Bravo steel products carousel 
$(".bravo-products-carousel").owlCarousel({
  autoplayHoverPause:true,
  autoplay: true,
  nav: false,
  loop: true,
  dots: true,
  items: 1
  });

  // BRAVO PAGE DESIGN AND BUILD
  $(".design-build-carousel").owlCarousel({
    autoplayHoverPause:true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

    //  Catering carousel 
$(".catering-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    1200: {
      items: 2
    },
    1500: {
      items: 1
    }
  }
  });

  // global restaurant details carousel
  $(".global-restaurant-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items:1
      }
    }
  });

    // global restaurant details carousel
    $(".global-restaurant-menu-carousel").owlCarousel({
      autoplay: false,
      dots: true,
      nav: false,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    });

    // global restaurant details carousel
    $(".global-restaurant-take-menu-carousel").owlCarousel({
      autoplay: false,
      dots: true,
      nav: false,
      loop: true,
       items: 1
    });

    // VELVET GANACHE
    $(".velvet-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        900: {
          items: 3
        },
        1200: {
          items: 2
        }
      }
    });


    // ENCROUTE
    $(".encroute-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        1200: {
          items: 2
        },
        1350: {
          items: 2
        }
      }
    });
  
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
  $(window).on('load', function() {
    $("#load-loader").fadeOut("slow");
  });

})(jQuery);

function show_contact_view(value){
  $("#"+value).fadeIn();

}
function close_contact_view(value){
  $("#"+value).fadeOut();

    
}

function open_small_menu(){
  $(".small-menu").toggle();
}





