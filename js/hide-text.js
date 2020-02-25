document.addEventListener("DOMContentLoaded", function (event) {
    const texts = document.querySelectorAll('[data-js="hidden-text"]');
    for (let text of texts) {
        text.setAttribute('data-height',text.offsetHeight+'px');
        text.classList.add('invisible');
        text.addEventListener('click', function (e) {
            e.preventDefault();

            text.classList.toggle('active');
            text.style.maxHeight = text.getAttribute('data-height');
        })
    }
    
});