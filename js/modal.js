document.addEventListener("DOMContentLoaded", function (event) {
    let modalBtn = document.querySelectorAll('[data-js="modal"]');
    let modalClose = document.querySelectorAll('[data-js="modal-close"]');

    function showModal(target) {
        let modal = document.querySelector(target);
        modal.classList.add('active')
        document.body.classList.add('locked');
    }

    function hideModal(target) {
        target.closest('.modal').classList.remove('active');
        document.body.classList.remove('locked');
    }

    modalBtn.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            let target = el.getAttribute('data-target') || el.getAttribute('href');

            showModal(target);
        })
    });

    modalClose.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            let target = el;

            hideModal(target);
        })
    });
});