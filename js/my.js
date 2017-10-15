popup = {
      init: function(){
        $('figure').click(function(){ //CHAMA A FUNCAO OPEN PARA PARA EXIBIR A IMG ESCOLHIDA
          popup.open($(this));
        });

        $(document).on('click', '.popup', function(){ //FECHA A IMG QUANDO CLICA NO X PARA FECHAR A IMAGEM ESCOLHIDA
          popup.close();
        }).keyup(function(e) { // FECHA A MODAL CASO DE ESC
        if (e.keyCode == 27) {
        // alert('escape');
        $('#portfolioModal2').hide();
        $('.modal-backdrop').hide();
        }
      }).on('click', '.modal-backdrop', function(){ //FECHA A MODAL CASO CLICK FORA DAS IMAGENS
        setTimeout(function(){
          $('.modal-backdrop').hide();
          $('#portfolioModal2').hide();
          $('.modal-open').css('overflow-y', 'auto'); //COLOCA A BARRA DE ROLAGEM
        }, 100);
      })
      },
      //FUNCAO PARA EXIBIR A IMAGEM ESCOLHIDA
      open: function($figure) {
        $('.gallery').addClass('pop');
        $popup = $('<div class="popup" />').appendTo($('#portfolioModal2'));
        $fig = $figure.clone().appendTo($('.popup'));
        $bg = $('<div class="bg" />').appendTo($('.popup'));
        $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
        $shadow = $('<div class="shadow" />').appendTo($fig);
        src = $('img', $fig).attr('src');
        $shadow.css({backgroundImage: 'url(' + src + ')'});
        $bg.css({backgroundImage: 'url(' + src + ')'});
      setTimeout(function(){
        $('.popup').addClass('pop');
      }, 10);
      },
      //FUNCAO PARA FECHAR A IMAGEM ESCOLHIDA
      close: function(){
        $('.gallery, .popup').removeClass('pop');
        setTimeout(function(){
          $('.popup').remove();
        }, 100);
      }
    }

    //QUANDO DER ESC HABILLITA AS DIVS PARA MOSTRAR AS FOTOS NOVAMENTE
    $('.portfolio-hover').on('click', function() {
    $('#portfolioModal2').show();
    $('.modal-backdrop').show();
    // popup.init();
  });
