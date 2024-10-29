$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1 // 1 элемент на маленьких экранах
            },
            600: {
                items: 3 // 3 элемента на средних экранах
            }
        }
    });
});