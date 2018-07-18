// Parallax

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}


$(window).scroll(function(e){
    parallax();
});


// Nav



$(document).ready(function () {
    $('.Name').hide(0).delay(500).fadeIn(3000);
});

$(document).ready(function () {
    $('.Job').hide(0).delay(1500).fadeIn(3000);
});

$(document).ready(function () {
    $('.masthead-nav').hide(0).delay(2000).fadeIn(3000);
});



// Links to scroll down

$("#About").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#AboutMe").offset().top)
    }, 2000);
});

$("#Portfolio").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#Portfolio1").offset().top)
    }, 2000);
});


$("#Contacts").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#Contact").offset().top)
    }, 2000);
});
