$(document).ready(function(){
    var initSelected = function () {
    var selectedwrap = $(".aside_section");
    var selected = $(".aside_cont");
    var animation = false;
    var anitime = 400;
    var fadetime = 300;
    var pdt = selected.find(".box_plate").eq(0).outerHeight() + 48;
    selected.find(".box_plate").each(function (index, element) {
        if (index === 0) {
            $(this).wrap('<div class="box_wrap first"></div>');
        } else if (index === 1) {
            $(this).wrap('<div class="box_wrap" style="padding-top:' + pdt + 'px"></div>');
        } else {
            $(this).wrap('<div class="box_wrap"></div>');
        }
    });

    selectedwrap.on("mousewheel DOMMouseScroll", function (event, delta) {
        event.preventDefault();
        if (animation == true) return;
        //if(event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0){
        if (delta > 0) {
            // console.log("스크롤업");
            animation = true;
            selected.find(".box_wrap:last-child").clone().prependTo(selected);
            selected.find(".box_wrap").eq(0).addClass("first");
            selected.find(".box_wrap").eq(1).removeClass("first").css("padding-top", 0).css("z-index", "3");
            selected.find(".box_wrap").eq(2).css("padding-top", "");
            selected.find(".box_wrap").eq(1).animate({
                paddingTop: pdt
            }, anitime, function () {
                $(this).css("z-index", "");
                selected.find(".box_wrap:last-child").remove();
                animation = false;
            });
        } else if (delta < 0) {
            // console.log("스크롤다운");
            animation = true;
            selected.find(".box_wrap").eq(0).css("z-index", 1);
            selected.find(".box_wrap").eq(1).animate({
                paddingTop: 0
            }, anitime, function () {
                selected.find(".box_wrap").eq(0).clone().appendTo(selected);
                selected.find(".box_wrap").eq(0).fadeTo(0, fadetime, function () {
                    $(this).remove();
                    selected.find(".box_wrap:last-child").css("z-index", "").removeClass("abs");
                    selected.find(".box_wrap").eq(0).css("padding-top", "").addClass("abs");
                    selected.find(".box_wrap").eq(1).css("padding-top", pdt + "px");
                    animation = false;
                });
            });
        }
    });
    $(window).resize(function () {
        pdt = selected.find(".box_plate").eq(0).outerHeight() + 48;
        selected.find(".box_wrap").eq(1).css("padding-top", pdt + "px");
    });

};
});//end
