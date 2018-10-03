$(document).ready(function() {
    $('.i-laconic').click(function(){
        $('.menu-item').toggleClass('hide');
        $('.i-menu').toggleClass('show');
        $('.modal-container').toggleClass('show');
        $('.i-laconic').toggleClass('show');
    });

    $('.i-menu').click(function(){
        $('.menu-item').toggleClass('hide');
    });
        
});