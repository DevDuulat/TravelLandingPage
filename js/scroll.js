 // Плавный скролл
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Изменение цвета текста в заголовке при прокрутке
const ourTeamSection = document.querySelector('#our-team');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const rect = ourTeamSection.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
        header.classList.add('white-text');
    } else {
        header.classList.remove('white-text');
    }
});