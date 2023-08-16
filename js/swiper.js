new Swiper('.services-container', {
    slidesPerView: 2,
    spaceBetween: 25,

    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },

    breakpoints: {
        1024: {
            slidesPerView: 3
        }
    }
})