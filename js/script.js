const clientWidth = document.documentElement.clientWidth;
const swiperSlider = document.querySelector('.swiper-container');

if (clientWidth < 1024) {
    swiperSlider.classList.remove('_active');
} else {
    swiperSlider.classList.add('_active');
    new Swiper('._active',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
       },
           loop: true,
    });
}   