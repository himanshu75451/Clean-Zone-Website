AOS.init({
    duration: 1200,
    // disable: 'mobile'
});

var btn = $('#back-to-top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

// Toggle Menu
$(".ham").click(function () {
    $(".ham").toggleClass("closeMenu");
    $(".menu").toggleClass("show-menu");
});
$(".drop-down").click(function () {
    $(".drop-down").toggleClass("closeMenu");
    $(".drop-down-menu").toggleClass("show-drop-down");
});

$('.banner-silder').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.service-silder').owlCarousel({
    loop: true,
    stagePadding: 100,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2,
            margin: 10,
            stagePadding: 10
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1300: {
            items: 4
        },
        1450: {
            items: 5
        }
    }
});

$('.testimonial-silder').owlCarousel({
    loop: true,
    stagePadding: 10,
    margin: 20,
    nav: false,
    autoplay: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.brands-silder').owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 150,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
$('.service-detail-silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
};
