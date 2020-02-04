function addVideo(src) {
  let div = document.createElement('div');
  div.className = 'video-container visible';
  div.innerHTML = ` <div class='video-container__iframe'>
                    <div class='video-container__close' data-js='video-container-close'>
                      <span class='icon icon-close'></span>
                    </div>
                    <iframe 
                      width="560"
                      height="315"
                      src="${src}" frameborder="0"
                      allow="accelerometer;
                      autoplay;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture"
                      allowfullscreen>
                    </iframe>
                  </div>`
  document.body.prepend(div);
}

function showVideo(btn) {
  let videoContainer = document.querySelector('.video-container');
  let src = btn.getAttribute('data-href');
  let body = document.querySelector('body');

  body.classList.add('locked');

  if (!videoContainer) {
    addVideo(src);
  } else {
    videoContainer.classList.add('visible');
  }
}

function hideVideo() {
  let body = document.querySelector('body');

  videoContainer.classList.remove('visible');
  body.classList.remove('locked');
}

function onClickClose(elem, parentContainer) { // вызвать в момент показа окна, где elem - окно
  function outsideClickListener(event) {
    if (!elem.contains(event.target) && isVisible(elem)) {  // проверяем, что клик не по элементу и элемент виден
      elem.closest(parentContainer).classList.remove('visible'); //скрыть
      document.removeEventListener('click', outsideClickListener);
    }
  }
  document.addEventListener('click', outsideClickListener)
}

function isVisible(elem) { //открыто ли условное окно
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector('[data-js="show-video"]');

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    showVideo(btn);
    btnClose = document.querySelector('[data-js="video-container-close"]');
  });

  window.addEventListener('click', function () {
    var ifr = document.querySelector('.video-container.visible iframe');
    var ifrParent = '.video-container';
    onClickClose(ifr, ifrParent);
  });
});



