/*global $, JQuery, alert*/

var scroll = window.pageYOffset;
window.onscroll = function () {
    var currentScroll = window.pageYOffset;
    if (scroll > currentScroll){
        document.getElementById('navbar').style.top = "0";
        $(".navbar-inverse").css("background", "#f9f9f9");
        $(".navbar-inverse").css("border-bottom-right-radius", "30px");
        $(".navbar-inverse").css("border-bottom-left-radius", "30px");
        $(".navbar-inverse").css("transition", "top 0.5s");
    }
    else {
        document.getElementById('navbar').style.top = "-90px";
    }
    scroll = currentScroll;
};
//////////////////////////////////////////////////////////
