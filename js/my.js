popupPortifolioVideo = {
      init: function(){
      $('.close-modal').on('click', function (e) {
  // caso clique me fechar a modal no X...
      $('#video').attr("src", $("#video").attr("src"));
      $('#video1').attr("src", $("#video1").attr("src"));
      $('#video2').attr("src", $("#video2").attr("src"));
  });
      $('.fecha-video').on('click', function (e) {
  // Caso clique em fechar videos btn amarelo...
      $('#video').attr("src", $("#video").attr("src"));
      $('#video1').attr("src", $("#video1").attr("src"));
      $('#video2').attr("src", $("#video2").attr("src"));
  });

    //QUANDO DER ESC HABILLITA AS DIVS PARA MOSTRAR AS FOTOS NOVAMENTE
    // $('.portfolio-hover').on('click', function() {
    // $('#portfolioModal2').show();
    // $('.modal-backdrop').show();
    // popup.init();
  }};
