$(document).on('ready', function() {
	var player1 = "player1";
	var player2 = "player2";
	var turn = player1;
	var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

var turns = function() {
    if (turn == "player1") {
      turn = "player2"
      $(this).text('x');
    } else {
      turn = "player1"
      $(this).text('o');
    }
  }

$('td').on('click', turns);


var winner = function() {
	$('td').off("click");
  window.alert("Winner!");
 };

for (var i = winningCombos.length - 1; i >= 0; i--) {
	winningCombo[i]
	var id = winningCombos[i][0];
 	var moveOne = $('#' + id).text()

	id = winningCombos[i][1];
	var moveTwo = $('#' + id).text()

	id = winningCombos[i][2];
	var moveThree = $('#' + id).text()

	if ( moveOne === moveTwo && moveTwo === moveThree ) {
		winner();
	}

};

});
