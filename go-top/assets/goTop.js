/**
 * 
 * @authors Jessica (owo.jessica@gmail.com)
 * @date    2016-04-25 09:57:32
 * @version $Id$
 */

$(function () {
    $("#goTop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#goTop').fadeIn("fast");
        } else {
            $('#goTop').stop().fadeOut("fast");
        }
    });
});