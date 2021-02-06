$(document).ready(function () {
    $('.item').click(function() {
        $(this).find('.item-cart').html('<span>W koszyku</span>');          
    });
});
