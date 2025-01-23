(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });




})(jQuery);


// My Area //
let nextx = document.querySelector(".images-container span.nextx");
let prevx = document.querySelector(".images-container span.prevx");
let img = document.querySelector(".images-container img");
let i = 1;

nextx.addEventListener("click", () => {
   i++;
   if (i == 7) i = 1;
   img.src = `./img/image-${i}.jpg`;
   
});

prevx.addEventListener("click", () => {
  i--;
  if (i == 0) i = 6;
  img.src = `./img/image-${i}.jpg`;
  
});