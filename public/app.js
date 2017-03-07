$(function() {
    $(".comicLink.high").on('click', function() {
        var comicSource = $(this).attr('source');
        window.open('/comics_high/' + comicSource + '.bmp', '_blank');
    });

    $(".comicLink.low").on('click', function() {
        var comicSource = $(this).attr('source');
        window.open('/comics_low/' + comicSource + '.JPG', '_blank');
    });

    $(".comicLink.character").on('click', function() {
        var comicSource = $(this).attr('source');
        window.open('/characters/' + comicSource + '.jpg', '_blank');
    });
});