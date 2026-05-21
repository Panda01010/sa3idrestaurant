document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Language selector alerts
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

    // Handle Reservation Form Submission (on reservation.html)
    const reservationForm = document.getElementById('reservation-form-page');
    const formSuccess = document.getElementById('form-success-page');
    const resetBtn = document.getElementById('reset-reservation');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Hide form, show success
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

    // Social buttons alerts (if clicked on dummy links)
    document.querySelectorAll('.social-buttons a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(btn.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Redirection vers notre page officielle prochainement !');
            }
        });
    });
});
