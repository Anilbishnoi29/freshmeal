// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("leftDays").innerHTML = days;
    document.getElementById("leftHours").innerHTML = hours;
    document.getElementById("leftMints").innerHTML = minutes;
    document.getElementById("leftSeconds").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("leftDays").innerHTML = "00";
        document.getElementById("leftHours").innerHTML = "00";
        document.getElementById("leftMints").innerHTML = "00";
        document.getElementById("leftSeconds").innerHTML = "00";
    }
}, 1000);



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