document.addEventListener("DOMContentLoaded", function (event) {
    const modalBtn = document.querySelectorAll('[data-js="modal"]');
    const modalClose = document.querySelectorAll('[data-js="modal-close"]');
    const modal = document.querySelectorAll('.modal');
    var isOpen = false;

    var my_video = document.getElementById("my_video");
    if (my_video != null) {
        var my_video = my_video.getElementsByTagName("iframe")[0].contentWindow;
    }


    function isVideoExist(video) {
        if (video != null) {
            video.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");
        }
    }

    function showModal(target) {
        let modal = document.querySelector(target);
        modal.classList.add('active')
        document.body.classList.add('locked');
        isOpen = true;
    }

    function hideModal(target) {
        target.closest('.modal').classList.remove('active');
        document.body.classList.remove('locked');
        isVideoExist(my_video);
        isOpen = false;
    }

    function onClickClose(elem) { // вызвать в момент показа окна, где elem - окно
        function outsideClickListener(event) {

            if (!elem.contains(event.target) && isVisible(elem)) {  // проверяем, что клик не по элементу и элемент виден
                modal.forEach(el => {
                    el.classList.remove('active');
                    isVideoExist(my_video);
                });
                document.body.classList.remove('locked');
                document.removeEventListener('click', outsideClickListener);
                isOpen = false;
            }
        }
        document.addEventListener('click', outsideClickListener)
    }

    function isVisible(elem) { //открыто ли условное окно
        return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    }

    modalBtn.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            let target = el.getAttribute('data-target') || el.getAttribute('href');

            showModal(target);
        })
    });

    modal.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            let content = el.querySelector('.modal__content');

            onClickClose(content);
        })
    });

    modalClose.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            let target = el;

            hideModal(target);
        })
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27) {

            if (isOpen) {
                modal.forEach(el => {
                    let content = el.querySelector('.modal__content');
                    hideModal(content)
                });
                isOpen = false;
            }

        }

    });
});