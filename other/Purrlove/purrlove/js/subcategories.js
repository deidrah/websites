$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        items: 1,
        slideBy: 1

    });
     $(".owl-prev").html('<img src="img/arrow_left.png">');
    $(".owl-next").html('<img src="img/arrow_right.png">');
});
