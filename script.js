document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Language selector alerts
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            let message = '';
            if(lang === 'EN') message = 'The English version is currently being prepared. Stay tuned!';
            if(lang === 'AR') message = 'النسخة العربية قيد التحضير حالياً. ترقبونا قريباً!';
            if(lang === 'ES') message = 'La versión en español se está preparando actualmente. ¡Mantente al tanto!';
            alert(message);
        });
    });

    // 3. Handle Reservation Form Submission (on reservation.html)
    const reservationForm = document.getElementById('reservation-form-page');
    const formSuccess = document.getElementById('form-success-page');
    const resetBtn = document.getElementById('reset-reservation');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Hide form, show success with animation
            reservationForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
        });

        if(resetBtn) {
            resetBtn.addEventListener('click', () => {
                reservationForm.reset();
                formSuccess.classList.add('hidden');
                reservationForm.style.display = 'block';
            });
        }
    }

    // 4. Social buttons alerts
    document.querySelectorAll('.social-buttons a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(btn.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Redirection vers notre page officielle prochainement !');
            }
        });
    });

    // 5. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Select all elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });
});
