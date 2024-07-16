const swiper = new Swiper('.swiper', {
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
    },

    scrollbar: {
        enabled: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});