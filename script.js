document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        var targetId = this.getAttribute('href');

        if (targetId === '#') {
            return;
        }

        var target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

var form = document.querySelector('.application-form');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами по email.');
        form.reset();
    });
}
