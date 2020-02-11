document.addEventListener("DOMContentLoaded", function (event) {

  let navigationLinks = document.querySelectorAll('.navigation .navigation__nav a');

  function removeClass(arr, classForRemove) {
    arr.forEach((el) => {
      el.classList.remove(classForRemove);
    });
  }

  navigationLinks.forEach((el) => {
    el.addEventListener('click', function () {
      removeClass(navigationLinks, 'active')
      el.classList.add('active');
    })
  });

  // ----------------------------

  const sections = document.querySelectorAll('.text-content__section');
  const config = {
    rootMargin: '0px 0px -70%'
  };

  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersectionHandler(entry);
      }
    });
  }, config);

  sections.forEach(section => {
    observer.observe(section);
  });

  function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector('.navigation__nav li a.active');
    const shouldBeActive = document.querySelector('.navigation__nav li a[href=\'#' + id + '\']');

    if (currentlyActive) {
      currentlyActive.classList.remove('active');
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add('active');
    }
  }
});