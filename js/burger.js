$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-upper-menu').toggleClass('active');
    });
});

document.querySelector('.catalog-menu').onclick = (elem) =>document.querySelector('.catalog-filter-wrapper').classList.toggle('active');

document.querySelector('.catalog-filter-header-cross').onclick = (elem) =>document.querySelector('.catalog-filter-wrapper').classList.toggle('active')