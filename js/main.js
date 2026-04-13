(function ($) {
    "use strict";

    // ── Preloader ──
    setTimeout(function () {
        $('#spinner').removeClass('show');
    }, 800);

    // ── Typed text ──
    if ($('.typed-text-output').length === 1) {
        var typed_strings = $('.typed-text').text();
        new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 300,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // ── Smooth scroll for anchor links ──
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        if ($(this).hasClass('back-to-top')) return;
        var target = $($.attr(this, 'href'));
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 40 }, 600);
        }
    });

    // ── Back to top ──
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600, 'easeInOutExpo');
        return false;
    });

    // ── Reveal on scroll (Intersection Observer) ──
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all
        document.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.add('active');
        });
    }

    // ── Portfolio Isotope filter ──
    var $container = $('.portfolio-container');
    var expanded = false;

    if ($container.length) {
        var portfolioIsotope = $container.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            transitionDuration: '0.5s'
        });

        $('#portfolio-flters li').on('click', function () {
            $('#portfolio-flters li').removeClass('active');
            $(this).addClass('active');

            // Show all items when filtering by category
            if (!expanded) {
                $('.portfolio-extra').css('display', '');
                expanded = true;
                $('#showMoreProjects').hide();
                $container.isotope('reloadItems');
            }
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    }

    // ── Show more / less projects ──
    $('#showMoreProjects').on('click', function () {
        if (!expanded) {
            $('.portfolio-extra').css('display', '');
            expanded = true;
            $(this).html('<i class="fas fa-chevron-up me-2"></i>Show Less');
        } else {
            $('.portfolio-extra').css('display', 'none');
            expanded = false;
            $(this).html('<i class="fas fa-chevron-down me-2"></i>Show More Projects');
            // Reset filter to All
            $('#portfolio-flters li').removeClass('active').first().addClass('active');
        }
        if ($container.length) {
            $container.isotope('reloadItems').isotope({ filter: expanded ? '*' : '*' });
        }
    });

    // ── Dark Mode ──
    $(document).ready(function () {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        function setDarkMode(enabled) {
            if (enabled) {
                $('body').addClass('dark-mode');
                $('#profileDarkModeToggle').find('i').removeClass('fa-moon').addClass('fa-sun');
            } else {
                $('body').removeClass('dark-mode');
                $('#profileDarkModeToggle').find('i').removeClass('fa-sun').addClass('fa-moon');
            }
        }

        // Init
        var saved = localStorage.getItem('darkMode');
        if (saved === 'enabled' || (saved === null && prefersDark.matches)) {
            setDarkMode(true);
            localStorage.setItem('darkMode', 'enabled');
        }

        // Toggle
        $('#profileDarkModeToggle').on('click', function () {
            var isDark = $('body').hasClass('dark-mode');
            setDarkMode(!isDark);
            localStorage.setItem('darkMode', isDark ? 'disabled' : 'enabled');
        });

        // System change
        prefersDark.addEventListener('change', function (e) {
            if (localStorage.getItem('darkMode') === null) {
                setDarkMode(e.matches);
            }
        });
    });

    // ── Resume modal: lazy-load PDF ──
    var resumeModal = document.getElementById('resumeModal');
    if (resumeModal) {
        resumeModal.addEventListener('show.bs.modal', function () {
            var iframe = resumeModal.querySelector('.resume-iframe');
            var pdfSrc = iframe.getAttribute('data-src');
            if (iframe && pdfSrc) {
                iframe.src = pdfSrc;
                iframe.removeAttribute('data-src');
            }
        });
    }

})(jQuery);

// ── Chatbot open/close ──
function openChat() {
    document.getElementById('chat-container').style.display = 'block';
}
function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
}
