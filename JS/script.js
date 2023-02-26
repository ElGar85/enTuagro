
$(document).ready(function(){
var referencePosition = 0; // donde se almacena a partir de que top se muestra el navbar
//var lastPosition = 0; // Auxiliar para saber si estas bajando o subiendo

$(window).scroll(function () {
//console.log($(this).scrollTop(),referencePosition);
    let positionActual = $(this).scrollTop();
    if ( positionActual > referencePosition){ //si estas debajo del punto de referencia, ocultar
        $('.header_superior').fadeOut(150);
    } else { // si subistes arriba del punto de referencia mostrar
        $('.header_superior').fadeIn(150);
        }
   // if (positionActual>lastPosition){ // si estas bajando, actualizar punto de referencia a 50 pixeles arriba del scroll actual
       // referencePosition=positionActual-50;
      //  }
       // lastPosition=positionActual; // actualizar auxiliar para saber si subes o bajas

    });
    });


    $(document).ready(function(){

        $('.ir-arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });

        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.ir-arriba').slideDown(300);
            } else {
                $('.ir-arriba').slideUp(300);
            }
        });

        });
