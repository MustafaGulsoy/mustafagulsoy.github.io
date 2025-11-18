/**
 * Portfolio Website - Interactive Features
 * Smooth scrolling, animations, and UI enhancements
 */

(function() {
    'use strict';

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Don't prevent default for links that just go to #
                if (href === '#') {
                    e.preventDefault();
                    return;
                }
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => observer.observe(card));

        // Observe sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));
    }

    // ============================================
    // ACTIVE NAVIGATION LINK HIGHLIGHT
    // ============================================
    function initActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section[id]');

        function updateActiveLink() {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.style.color = '';
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.style.color = 'var(--color-text)';
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink(); // Initial check
    }

    // ============================================
    // HEADER SHADOW ON SCROLL
    // ============================================
    function initHeaderShadow() {
        const header = document.querySelector('.header');
        
        function updateHeaderShadow() {
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            } else {
                header.style.boxShadow = 'none';
            }
        }

        window.addEventListener('scroll', updateHeaderShadow);
        updateHeaderShadow(); // Initial check
    }

    // ============================================
    // EXTERNAL LINKS - OPEN IN NEW TAB
    // ============================================
    function initExternalLinks() {
        const links = document.querySelectorAll('a[href^="http"]');
        
        links.forEach(link => {
            // Skip if already has target attribute
            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // ============================================
    // PROJECT CARD HOVER EFFECTS
    // ============================================
    function initProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(4px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
    }

    // ============================================
    // COPY EMAIL TO CLIPBOARD
    // ============================================
    function initEmailCopy() {
        const emailLink = document.querySelector('a[href^="mailto:"]');
        
        if (emailLink) {
            emailLink.addEventListener('click', function(e) {
                const email = this.getAttribute('href').replace('mailto:', '');
                
                // Create temporary input to copy email
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                
                try {
                    document.execCommand('copy');
                    
                    // Show feedback
                    const originalText = this.innerHTML;
                    this.innerHTML = this.innerHTML.replace('Email', 'Copied!');
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                } catch (err) {
                    console.log('Copy failed:', err);
                }
                
                document.body.removeChild(tempInput);
            });
        }
    }

    // ============================================
    // MOBILE MENU TOGGLE (if needed in future)
    // ============================================
    function initMobileMenu() {
        // Placeholder for mobile menu functionality
        // Can be expanded if hamburger menu is added
    }

    // ============================================
    // PERFORMANCE: LAZY LOAD IMAGES
    // ============================================
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // ANALYTICS TRACKING (placeholder)
    // ============================================
    function initAnalytics() {
        // Track page views
        console.log('Page viewed:', window.location.pathname);
        
        // Track link clicks
        const trackableLinks = document.querySelectorAll('a[href^="http"]');
        trackableLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('External link clicked:', this.href);
            });
        });

        // Track section views
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Section viewed:', entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));
    }

    // ============================================
    // KEYBOARD NAVIGATION ACCESSIBILITY
    // ============================================
    function initKeyboardNav() {
        // Add focus styles for keyboard users
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-nav');
        });
    }

    // ============================================
    // DARK MODE TOGGLE (optional)
    // ============================================
    function initDarkMode() {
        // Check for saved preference
        const darkMode = localStorage.getItem('darkMode');
        
        if (darkMode === 'enabled') {
            document.body.classList.add('dark-mode');
        }

        // Create toggle button (optional)
        // Can be implemented if dark mode is desired
    }

    // ============================================
    // LANGUAGE SWITCHER
    // ============================================
    let currentLang = 'en';

    function initLanguageSwitcher() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            currentLang = savedLang;
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase();
            currentLang = browserLang.startsWith('tr') ? 'tr' : 'en';
        }

        // Apply initial language
        applyLanguage(currentLang);

        // Add click handlers to language buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.dataset.lang;
                if (lang !== currentLang) {
                    currentLang = lang;
                    localStorage.setItem('preferredLanguage', lang);
                    applyLanguage(lang);
                    updateActiveLangButton();
                }
            });
        });

        updateActiveLangButton();
    }

    function applyLanguage(lang) {
        // Check if translations are loaded
        if (typeof translations === 'undefined') {
            console.warn('Translations not loaded');
            return;
        }

        const t = translations[lang];
        if (!t) return;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const keys = key.split('.');
            let value = t;

            for (let k of keys) {
                value = value[k];
                if (!value) break;
            }

            if (value) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = value;
                } else {
                    element.innerHTML = value;
                }
            }
        });

        // Update all lists with data-i18n-list attribute
        document.querySelectorAll('[data-i18n-list]').forEach(listElement => {
            const key = listElement.dataset.i18nList;
            const keys = key.split('.');
            let value = t;

            for (let k of keys) {
                value = value[k];
                if (!value) break;
            }

            if (value && Array.isArray(value)) {
                // Clear existing list items
                listElement.innerHTML = '';

                // Add translated list items
                value.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    listElement.appendChild(li);
                });
            }
        });

        // Update summary text
        const summaries = document.querySelectorAll('.project-details summary');
        summaries.forEach(summary => {
            summary.textContent = lang === 'tr' ? 'Neler Yaptım' : 'What I Did';
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    function updateActiveLangButton() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // ============================================
    // PROJECT IMAGE CAROUSEL
    // ============================================
    function initProjectCarousel() {
        const carousels = document.querySelectorAll('.project-image-carousel');

        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll('.project-image');
            if (images.length <= 1) return; // Skip if only one image

            let currentIndex = 0;

            function rotateImages() {
                // Remove active class from current image
                images[currentIndex].classList.remove('active');

                // Move to next image (loop back to 0 if at end)
                currentIndex = (currentIndex + 1) % images.length;

                // Add active class to new image
                images[currentIndex].classList.add('active');
            }

            // Rotate every 3 seconds (3000ms)
            setInterval(rotateImages, 3000);
        });
    }

    // ============================================
    // INITIALIZE ALL FEATURES
    // ============================================
    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all features
        initLanguageSwitcher();
        initProjectCarousel();
        initSmoothScroll();
        initScrollAnimations();
        initActiveNavigation();
        initHeaderShadow();
        initExternalLinks();
        initProjectCardEffects();
        initEmailCopy();
        initLazyLoading();
        initKeyboardNav();

        // Optional features
        // initAnalytics();
        // initDarkMode();

        console.log('Portfolio website initialized successfully ✨');
    }

    // Start initialization
    init();

})();

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}