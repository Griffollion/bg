 window.addEventListener('load',function(){
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
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: false,
            rewind: true,
            arrows: {
                prev: "#glider-prev",
                next: "#glider-next"
            }
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