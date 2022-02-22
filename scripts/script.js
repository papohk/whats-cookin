document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
    try {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {});

        elems = document.querySelectorAll('.slider');
        instances = M.Slider.init(elems, {});

        elems = document.querySelectorAll('.parallax');
        instances = M.Parallax.init(elems, {});
    } catch (error) {
        console.log(error);
    }
});