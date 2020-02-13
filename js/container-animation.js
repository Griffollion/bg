document.addEventListener("DOMContentLoaded", function (event) {
  const sections = document.querySelectorAll('.animated-container');
  const config = {
    rootMargin: '0px 0px -5%'
  };

  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersectionHandler(entry);
        self.unobserve(entry.target);
      }
    });
  }, config);

  sections.forEach(section => {
    observer.observe(section);
  });

  function intersectionHandler(entry) {
    entry.target.classList.add('animated');
  }
});