$(document).ready(function(){
    
    //gnb
    $('.submenu_bg').hover(function(){
        $(this).siblings('a').toggleClass('active'); 
    });
    
    $(function(){
        //footer 사업자정보
        $('.btn_corp').click(function(){
            $('.corp_cont').toggleClass('on');       
        }); 
        //btn_top 상단으로
        $('.btn_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    });
    //btn_top
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.header').height()){
            $('.btn_top').addClass('on');
        } else {
            $('.btn_top').removeClass('on');
        }
    });
    
    
});//end
