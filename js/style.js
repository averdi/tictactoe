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
          $('#messages').html("Player O's turn")
        } else {
          turn = 0;
          cell.addClass('o-hand')
          $('#messages').html("Player X's turn")
        }
        seeWhoWon();
      }
  });

function seeWhoWon(){
  if ($('#cell-11').hasClass('x-hand') && $('#cell-12').hasClass('x-hand') && $('#cell-13').hasClass('x-hand')){
    alert("x wins!");
  } else if ($('#cell-11').hasClass('o-hand') && $('#cell-12').hasClass('o-hand') && $('#cell-13').hasClass('o-hand')){
      alert("o wins!");
  } else if ($('#cell-21').hasClass('x-hand') && $('#cell-22').hasClass('x-hand') && $('#cell-23').hasClass('x-hand')){
      alert("x wins!");
  } else if ($('#cell-21').hasClass('o-hand') && $('#cell-22').hasClass('o-hand') && $('#cell-23').hasClass('o-hand')){
      alert("o wins!");
  } else if ($('#cell-31').hasClass('x-hand') && $('#cell-32').hasClass('x-hand') && $('#cell-33').hasClass('x-hand')){
      alert("x wins!");
    } else if ($('#cell-31').hasClass('o-hand') && $('#cell-32').hasClass('o-hand') && $('#cell-33').hasClass('o-hand')){
      alert("o wins!");
    } else if ($('#cell-11').hasClass('x-hand') && $('#cell-21').hasClass('x-hand') && $('#cell-31').hasClass('x-hand')){
      alert ("x wins!");
    } else if ($('#cell-11').hasClass('o-hand') && $('#cell-21').hasClass('o-hand') && $('#cell-31').hasClass('o-hand')){
      alert ("o wins!");
    } else if ($('#cell-12').hasClass('x-hand') && $('#cell-22').hasClass('x-hand') && $('#cell-32').hasClass('x-hand')){
      alert ("x wins!");
    } else if ($('#cell-12').hasClass('o-hand') && $('#cell-22').hasClass('o-hand') && $('#cell-32').hasClass('o-hand')){
      alert ("o wins!");
    } else if ($('#cell-13').hasClass('x-hand') && $('#cell-23').hasClass('x-hand') && $('#cell-33').hasClass('x-hand')){
      alert ("x wins!");
    } else if ($('#cell-13').hasClass('o-hand') && $('#cell-23').hasClass('o-hand') && $('#cell-33').hasClass('o-hand')){
      alert ("o wins!");
    } else if ($('#cell-11').hasClass('x-hand') && $('#cell-22').hasClass('x-hand') && $('#cell-33').hasClass('x-hand')){
      alert ("x wins!");
    } else if ($('#cell-11').hasClass('o-hand') && $('#cell-22').hasClass('o-hand') && $('#cell-33').hasClass('o-hand')){
      alert ("o wins!");
    } else if ($('#cell-13').hasClass('x-hand') && $('#cell-22').hasClass('x-hand') && $('#cell-31').hasClass('x-hand')){
      alert ("x wins!");
    } else if ($('#cell-13').hasClass('o-hand') && $('#cell-22').hasClass('o-hand') && $('#cell-31').hasClass('o-hand')){
      alert ("o wins!");
    };
};



  $('.button').click(function(){
    $('td').removeClass('x-hand').removeClass('o-hand');
    $('#messages').html("Player turn: 1")

  });

});
