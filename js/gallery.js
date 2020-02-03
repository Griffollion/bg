document.addEventListener("DOMContentLoaded", function (event) {
        // document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
        //     var glider = Glider(this);
        //     console.log('Slide Visible %s', event.detail.slide)
        // });
        // document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
        //     console.log('Slide Hidden %s', event.detail.slide)
        // });
        // document.querySelector('.glider').addEventListener('glider-refresh', function(event){
        //     console.log('Refresh')
        // });
        // document.querySelector('.glider').addEventListener('glider-loaded', function(event){
        //     console.log('Loaded')
        // });

        window._ = new Glider(document.querySelector("[data-js='gallery-portrait']"), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: false,
            rewind: true,
            arrows: {
                prev: "#glider-prev",
                next: "#glider-next"
            },  responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 5,
                    }
                  }
              ]
        });

        window._ = new Glider(document.querySelector("[data-js='gallery']"), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: false,
            dots: '#dots-2',
            rewind: true,
            arrows: {
                prev: '#glider-prev-2',
                next: '#glider-next-2'
            }
        });

      });