let swiperCards = new Swiper('.swipercards-js-style', {
    
    loop: true,
    spaceBetween: 32,
    grabCursor:true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        500:{
            slidesPerView:2,
        },
        900:{
            slidesPerView:3,
        },
        1100:{
            slidesPerView:4,
        },
    },


});