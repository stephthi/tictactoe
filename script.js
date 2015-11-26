$(document).on('ready', function() {
	var player1 = "player1";
	var player2 = "player2";
	var turn = player1;
	var winningCombos =[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9]];

var turns = function() {
    if (turn == "player1") {
      turn = "player2"
    } else {
      turn = "player1"
    }
    $(this).text('x');
  }

$('td').on('click', turns);


var winner = function() {
	$('td').off("click");
  window.alert(turn + " winner");

 }



});
