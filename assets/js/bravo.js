$(window).on('load', function() {
    if($(window).width()<675){
      $('.collapse').removeClass('show');
      $('.btn').addClass('collapsed');

    }
  });