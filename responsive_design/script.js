$('.left').inViewport(function (px) {
    if (px) $(this).addClass('trigger');
})

$('.right').inViewport(function (px) {
    if (px) $(this).addClass('trigger');
})