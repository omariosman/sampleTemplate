/*global $, window, document*/
$(document).ready(function () {
    "use strict";
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        interval: 3000
    });
    
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    
    var sel = $(".color-option ul li"),
        scrollButton = $("#scrollTop");
    
    sel
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#428BCA").end()
        .eq(2).css("backgroundColor", "#FFB535").end()
        .eq(3).css("backgroundColor", "#77AF02");
    
    sel.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
       
    });
    
    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0}, 700);
    });
});


$(window).on('load', function () {
    "use strict";
    
    $("body").css("overflow", "auto");
    $(".loading-overlay .spinner").fadeOut(1000, function () {
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
});



