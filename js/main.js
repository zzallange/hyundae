$(document).ready(function(){
    
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.header').height()){
            $('.btn_top').addClass('on');
        } else {
            $('.btn_top').removeClass('on');
        }
    });
    $(function(){
        //footer
        $('.btn_corp').click(function(){
            $('.corp_cont').toggleClass('on');       
        }); 
        //top button
        $('.btn_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    });
});//end
