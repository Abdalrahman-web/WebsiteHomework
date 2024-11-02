$(document).ready(function(){
    // Initialize Owl Carousel for Hero Slider
    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut'
    });

    // Initialize Owl Carousel for Projects Slider
    $(".projects-slider .owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        autoplay: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    $('#imageSlider').carousel({
        interval: 2000 // Change image every 2 seconds
    });

    // Fade-in animation on scroll for Skills section
    $(window).on('scroll', function() {
        const skillsSection = $('.skills-section').offset().top - window.innerHeight;
        if ($(window).scrollTop() > skillsSection) {
            $('.skills-section').addClass('animate-skills');
        }
    });
});
