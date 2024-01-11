// 
// swiper.js
//


// index-2
function testimonialSwiper() {
    swiper = new Swiper(".testimonial-swiper", {
        loop: !0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1,
        },
        pagination: {
            clickable: !0,
            el: ".swiper-pagination",
        },
    });
}
testimonialSwiper();


// index-3
function logoSwiper() {
    new Swiper(".logo-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
}
logoSwiper();