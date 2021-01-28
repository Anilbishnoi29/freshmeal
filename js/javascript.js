// searchbar

function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
    document.getElementById("mySidepanel").style.paddingLeft = ".5rem";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// slider
$(document).ready(function() {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slideToScroll: 1,
        prevArrow: ".product-btn-prev",
        nextArrow: ".product-btn-next",
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    // navbar
    $('.nav-trigger').click(function() {
        $('.site-content-wrapper').toggleClass('scaled');
    })

});