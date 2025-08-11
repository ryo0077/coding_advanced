// <!-- fade in animation -->
function animation() {
    $('.animationTrigger').each(function () {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (scroll > position - windowHeight + 100) {
            $(this).addClass('animation');
        } else {
            $(this).removeClass('animation');
        }
    })
}
$(window).scroll(function () {
    animation();
});


$(function() {
  $('.hamburger').click(function() {
    $('#menu').toggleClass('open');
  })});

// <!-- アコーディオンメニュー-->
$(function () {
    $('.menu-item-btn ').click(function () {
        $(this).siblings('ul').stop().slideToggle();
    })
});

//  <!-- swiper -->
$(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 1,
        breakpoints: {
            481: {
                slidesPerView: 2,
            }
        },
        autoplay: {
            delay: 1500,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});