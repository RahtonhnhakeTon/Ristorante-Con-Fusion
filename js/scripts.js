$(document).ready(function() {
    $('#Carousel').carousel({ interval: 500 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#Carousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#Carousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#reserveTableButton').click(function() {
        $('#reservationModal').modal('show');
    });
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
});