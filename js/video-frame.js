function addVideo(src, width, height) {
  let div = document.createElement('div');
  div.className = 'video-container visible';
  div.innerHTML = ` <div class='video-container__iframe'>
                    <div class='video-container__close' data-js='video-container-close'>
                      <span class='icon icon-close'></span>
                    </div>
                    <iframe 
                      width="${width}"
                      height="${height}"
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

function getDeviceSizes() {
  let deviceSizes = {
    width: parseInt(window.innerWidth / 2),
    height: parseInt((window.innerWidth / 2) / 1.8),
  }

  return deviceSizes;
}

window.onresize = getDeviceSizes;

function showVideo(btn) {
  let videoContainer = document.querySelector('.video-container');
  let src = btn.getAttribute('data-href');
  let body = document.querySelector('body');
  let deviceSizes = getDeviceSizes();


  body.classList.add('locked');

  if (!videoContainer) {
    addVideo(src, deviceSizes.width, deviceSizes.height);
  } else {
    videoContainer.classList.add('visible');
  }
}

function hideVideo() {
  let body = document.querySelector('body');
  let videoContainer = document.querySelector('.video-container');

  videoContainer.classList.remove('visible');
  body.classList.remove('locked');
}

function onClickClose(elem, parentContainer) { // вызвать в момент показа окна, где elem - окно
  function outsideClickListener(event) {
    if (!elem.contains(event.target) && isVisible(elem)) {  // проверяем, что клик не по элементу и элемент виден
      hideVideo();
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
    var ifrParent = '.video-container.visible';
    onClickClose(ifr, ifrParent);
  });
});



