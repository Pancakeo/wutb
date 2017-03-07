$(function() {
    $(".comicLink.high").on('click', function() {
        var comicSource = $(this).attr('source');
        window.open('/comics_high/' + comicSource + '.bmp', '_blank');
    });
});