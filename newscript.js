$(document).ready(function() {


	var winningCombo = [[1,2,3],[4,5,6],[7,8,9],[3,5,7],[1,5,9],[1,4,7],[2,5,8],[3,6,9]];
	var turn = 1;


	$('td').on('click', function() {
		if (turn % 2 == 0) {
			$(this).text("O");
		} else {
			$(this).text('X');
		}
	    $(this).off('click');
		turn ++;
	});






	function checkForWinner() {
		for (var i = winningCombo.length - 1; i >= 0; i--) {
			var id = winningCombo[i][0];
			var moveOne = $('#' + id).text();

			var id = winningCombo[i][1];
			var moveTwo = $('#' + id).text();

			var id = winningCombo[i][2];
			var moveThree = $('#' + id).text();

            if ( (moveOne != "") &&
            	 (moveOne === moveTwo && moveTwo === moveThree) ) {

                var winner = moveOne;
                alert("The winner is: " + winner);
			}
  		}
	};

	$('td').on('click', checkForWinner);


});
