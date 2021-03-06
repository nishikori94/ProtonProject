$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselExample .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample .carousel-item').eq(i).appendTo('#carouselExample .carousel-inner');
            }
            else {
                $('#carouselExample .carousel-item').eq(0).appendTo('#carouselExample .carousel-inner');
            }
        }
    }
});