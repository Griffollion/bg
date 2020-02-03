document.addEventListener("DOMContentLoaded", function (event) {

  (function () {
    const anchors = document.querySelectorAll('[data-js="slow-scroll"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e, callback) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }
  }());

  (function () {
    let lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
  });
  }());

});