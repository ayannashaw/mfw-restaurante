$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 750) { // Carousel Size
            $('.navbar').css({
                'background-color': '#000000',
                'padding-bottom': '5px'
            });
        } else {
            $('.navbar').css({
                'background-color': 'transparent',
            });
        }
    });
});