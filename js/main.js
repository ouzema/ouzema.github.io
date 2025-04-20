(function ($) {
    "use strict";

    // Preloader
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1500); // Increased timeout for smoother transition
    };
    spinner();
    
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initiate the wowjs
    new WOW().init();

    // Smooth scrolling for all anchor links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        
        // Skip processing for back-to-top button as it's handled separately
        if ($(this).hasClass('back-to-top')) return;
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 800);
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    
    // Handle back to top button click
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });

    // Typed Initiate with improved settings
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 500,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });
    
    // Skills progress bars animation
    function animateSkills() {
        $('.progress .progress-bar').each(function () {
            var valuenow = $(this).attr("aria-valuenow");
            $(this).css("width", 0);
            $(this).animate({
                width: valuenow + '%'
            }, 1500);
        });
    }

    // Trigger skills animation when scrolled into view
    var skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                animateSkills();
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(skillsSection);
    }

    // Portfolio isotope and filter with animation
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.8s'
    });
    
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Reveal animation for elements when scrolled into view
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on page load

    // Dark Mode Toggle
    $(document).ready(function() {
        // Check for saved dark mode preference or use system preference as fallback
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        function updateDarkModeUI(isDarkMode) {
            if (isDarkMode) {
                $('body').addClass('dark-mode');
                $('#profileDarkModeToggle').find('i').removeClass('fa-moon').addClass('fa-sun');
            } else {
                $('body').removeClass('dark-mode');
                $('#profileDarkModeToggle').find('i').removeClass('fa-sun').addClass('fa-moon');
            }
        }
        
        // Initialize dark mode based on preference
        if (localStorage.getItem('darkMode') === 'enabled' || 
            (localStorage.getItem('darkMode') === null && prefersDarkScheme.matches)) {
            updateDarkModeUI(true);
            localStorage.setItem('darkMode', 'enabled');
        } else {
            updateDarkModeUI(false);
            localStorage.setItem('darkMode', 'disabled');
        }

        // Dark mode toggle click handler
        $('#profileDarkModeToggle').on('click', function() {
            if ($('body').hasClass('dark-mode')) {
                // Switch to light mode
                updateDarkModeUI(false);
                localStorage.setItem('darkMode', 'disabled');
                console.log('Dark mode disabled');
            } else {
                // Switch to dark mode
                updateDarkModeUI(true);
                localStorage.setItem('darkMode', 'enabled');
                console.log('Dark mode enabled');
            }
        });
        
        // Listen for changes in system color scheme preference
        prefersDarkScheme.addEventListener('change', (e) => {
            if (localStorage.getItem('darkMode') === null) {
                updateDarkModeUI(e.matches);
            }
        });
    });

    // Portfolio item hover effect
    $('.portfolio-item').each(function() {
        $(this).hover(
            function() {
                $(this).find('img').css('transform', 'scale(1.1)');
            },
            function() {
                $(this).find('img').css('transform', 'scale(1)');
            }
        );
    });
    
    // Custom cursor animation
    $(document).ready(function() {
        // Create cursor elements if they don't exist
        if ($('.cursor-dot').length === 0) {
            $('body').append('<div class="cursor-dot"></div><div class="cursor-dot-outline"></div>');
        }
        
        // Variables
        var cursor = {
            delay: 8,
            _x: 0,
            _y: 0,
            endX: (window.innerWidth / 2),
            endY: (window.innerHeight / 2),
            cursorVisible: true,
            cursorEnlarged: false
        };
        
        var $dot = $('.cursor-dot');
        var $outline = $('.cursor-dot-outline');
        
        // Show cursor
        setTimeout(function() {
            $dot.css('opacity', 1);
            $outline.css('opacity', 1);
        }, 500);
        
        // Mouse Listener
        $(document).on('mousemove', function(e) {
            cursor.endX = e.clientX;
            cursor.endY = e.clientY;
        });
        
        // Animation Loop
        function animateCursor() {
            cursor._x = lerp(cursor._x, cursor.endX, 0.2);
            cursor._y = lerp(cursor._y, cursor.endY, 0.2);
            
            $dot.css({
                'left': cursor._x + 'px',
                'top': cursor._y + 'px'
            });
            
            $outline.css({
                'left': cursor._x + 'px',
                'top': cursor._y + 'px'
            });
            
            requestAnimationFrame(animateCursor);
        }
        
        // Linear Interpolation
        function lerp(start, end, amt) {
            return (1 - amt) * start + amt * end;
        }
        
        // Start Animation
        animateCursor();
        
        // Cursor effects on hover
        $('a, button, .btn, input[type="submit"], .feature-card, .portfolio-item').on({
            mouseenter: function() {
                $outline.css({
                    transform: 'translate(-50%, -50%) scale(1.5)',
                    background: 'rgba(247, 37, 133, 0.2)',
                    borderColor: 'rgba(247, 37, 133, 0.4)'
                });
                $dot.css({
                    transform: 'translate(-50%, -50%) scale(1.2)',
                    background: 'var(--accent)'
                });
            },
            mouseleave: function() {
                $outline.css({
                    transform: 'translate(-50%, -50%) scale(1)',
                    background: 'rgba(247, 37, 133, 0.15)',
                    borderColor: 'rgba(67, 97, 238, 0.3)'
                });
                $dot.css({
                    transform: 'translate(-50%, -50%) scale(1)',
                    background: 'var(--primary)'
                });
            }
        });
        
        // Hide cursor when leaving window
        $(window).on('mouseout', function() {
            $dot.css('opacity', '0');
            $outline.css('opacity', '0');
        });
        
        $(window).on('mouseover', function() {
            $dot.css('opacity', '1');
            $outline.css('opacity', '1');
        });
        
        // Hide cursor on mobile devices
        if (window.matchMedia("(max-width: 991px)").matches) {
            $('.cursor-dot, .cursor-dot-outline').css('display', 'none');
        }
    });

    // Service item hover animation
    $('.service-item').each(function() {
        $(this).hover(
            function() {
                $(this).css('transform', 'translateY(-10px)');
            },
            function() {
                $(this).css('transform', 'translateY(0)');
            }
        );
    });
})(jQuery);

// Your existing JavaScript code here

function openChat() {
    document.getElementById('chat-container').style.display = 'block';
}

function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            appendMessage('user', userMessage);
            // Add logic to send the user message to your server and get the AI's response
            // Once you have the AI's response, call appendMessage('assistant', aiResponse);
            userInput.value = '';
        }
    }

    function appendMessage(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;
        messageDiv.innerHTML = `<strong>${role.charAt(0).toUpperCase() + role.slice(1)}:</strong> ${content}`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    window.sendMessage = sendMessage;
});
