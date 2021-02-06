$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 3,
        slideBy: 3

    });
    $('.item').click(function () {
        $(this).find('.item-cart').html('<span>W koszyku</span>');
    });
});
