/*global $, JQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    
	$('.carousel').carousel({
        
		interval: 6000
        
	});

	//Show Option Box When Click On The Gear

	$(".gear-check").click(function () {
        
		$(".color-option").fadeToggle();
        
	});

	//Change Theme Color On Click

	var color = $(".color-option ul li"),
        scrolltop = $(".scroll-top");

	color
		.eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#26c0d0").end()
		.eq(2).css("backgroundColor", "#585353").end()
		.eq(3).css("backgroundColor", "#29942d").end()
		.eq(4).css("backgroundColor", "#ef67d1");


	color.click(function () {
        
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));

	});


	// Caching The Scroll To Top Element

	$(window).scroll(function () {
        
		if ($(this).scrollTop() >= 700) {
            
			scrolltop.show();
            
		} else {
            
			scrolltop.hide();
            
		}
	});

	scrolltop.click(function () {
        
		$("html,body").animate({scrollTop: 0}, 600);
        
	});
});


//Loading Screen 

//$(window).load(function () {
//	//Loading Elements
//    "use strict";
//    
//	$(".spinner").fadeOut(2000, function () {
//        
//		$(this).parent().fadeOut(2000, function () {
//            
//			$("body".css("overflow", "auto"));
//
//			$(this).remove();
//		});
//	});
//});