document.addEventListener('DOMContentLoaded', function () {
    const showConfirm = document.querySelector('[data-js="show-code-confirm"]');
    const confirmContainer = document.querySelector('.registration__confirm');
    showConfirm.addEventListener('click', function () {
        showConfirm.classList.add('hide');
        confirmContainer.classList.add('active');
    });
});