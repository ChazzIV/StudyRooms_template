const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.link__container');
let on_off = true;
//nav
let ubicacionPrincipal = window.pageXOffset; //0

  AOS.init();

window.addEventListener('scroll', () => {
    let desplazamientoActual = window.pageYOffset; //mide 100
    // if(ubicacionPrincipal>=desplazamientoActual){ //100 es mayo a 100
    //     document.getElementsByTagName('nav__container')[0].style.top = '0px'; 
    // }else{
    //     document.getElementsByTagName('nav__container')[0].style.top = '-100px'
    // }
    ubicacionPrincipal= desplazamientoActual; // 100
})


// Responsive Menu
btnMenu.addEventListener('click', () => {
     
  if (on_off) {
     menu.style.left = "0";
     menu.style.transition = "300ms";
     on_off = false;
  }else{
      on_off = false;
      menu.style.left = "-100%";
      menu.style.transition = "300ms";
      on_off = true;
  }

});

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__cards'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
         responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 500,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1 
              }
            },
            {
              // screens greater than >= 1024px
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
    });
});


window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__cursos'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores__cursos',
        arrows: {
            prev: '.carousel__anterior__cursos',
            next: '.carousel__siguiente__cursos'
        },
         responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 500,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1 
              }
            },
            {
              // screens greater than >= 1024px
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
    });
});

window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__testimonial'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.carousel__indicadores__testimonial',
      arrows: {
          prev: '.carousel__anterior__testimonial',
          next: '.carousel__siguiente__testimonial'
      },
       responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 500,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 1,
              slidesToScroll: 1 
            }
          },
          {
            // screens greater than >= 1024px
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
  });
});