$('.left').inViewport(function (px) {
    if (px) $(this).addClass('trigger');
})

$('.right').inViewport(function (px) {
    if (px) $(this).addClass('trigger');
})

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < $(window).height() - $("#topNavbar").height()) {
            $("#topNavbar a").css("color", "black");
            $("#topNavbar").css("backgroundColor", "rgba(218, 165, 32, 0.7)");
        }
        else {
            $("#topNavbar a").css("color", "white");
            $("#topNavbar").css("backgroundColor", "#343a40");
        }
    })
})