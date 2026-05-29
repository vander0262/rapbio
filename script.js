 // Модальные окна для карточек
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        const bioId = this.getAttribute('data-bio');
        if (bioId) {
            const overlay = document.getElementById(bioId);
            if (overlay) {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        e.stopPropagation();
    });
});

// Закрытие модальных окон
const overlays = document.querySelectorAll('.bio-overlay');
overlays.forEach(overlay => {
    const closeBtn = overlay.querySelector('.close-bio');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            e.stopPropagation();
        });
    }
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeOverlay = document.querySelector('.bio-overlay.active');
        if (activeOverlay) {
            activeOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Обработка формы на странице контактов
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const message = document.getElementById('message')?.value || '';
        
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.innerHTML = '✅ Спасибо, ' + name + '! Ваше сообщение отправлено. Мы ответим на ' + email + ' в ближайшее время.';
            formMessage.style.background = 'rgba(0, 255, 0, 0.2)';
            formMessage.style.color = '#90ff90';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.innerHTML = '';
                formMessage.style.background = '';
            }, 5000);
        }
    });
}
