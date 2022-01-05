if ($(window).width() < 1024) {
    $('.swiper-container').removeClass('_active');
    slider();
} else {
    $('.swiper-container').addClass('_active');
    slider();
}   
   function slider(){
       new Swiper('._active',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
    });
   }
