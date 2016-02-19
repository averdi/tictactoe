$(function(){

  var turn = 0;

  $("#cell-11, #cell-12, #cell-13, #cell-21, #cell-22, #cell-23, #cell-31, #cell-32, #cell-33").click(function(){
      var cell = $(this);

      if (cell.hasClass('x-hand') || cell.hasClass('o-hand')){
        return false;
      } else{
        if(turn==0) {
          turn = 1;
          cell.addClass('x-hand');
          //some text says that it's then player two's turn
        } else {
          turn = 0;
          cell.addClass('o-hand')
          //some text says that it's then player one's turn
        }
      }
  });

  $('.button').click(function(){
    $('td').removeClass('x-hand').removeClass('o-hand');

  });

});
