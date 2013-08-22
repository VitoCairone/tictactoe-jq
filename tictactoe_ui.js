$(function() {
	var game = new Game();

	function createGrid() {
		for (var j = 0; j < 3; j++) {
			$('.master').append($('<div class="row" id="row' + j + '">'));
			for (var i = 0; i < 3; i++) {
				$('#row' + j).append($('<div class="space" id="space' + i + j + '">&nbsp;</div>'));
			}
		}
	}

	createGrid();
	$('#messages').text(game.player + "'s turn.");

	for (var j = 0; j < 3; j++) {
		for (var i = 0; i < 3; i++) {
			//$('#space' + i + j).text("ThisIs"+i+j);
			$('#space' + i + j).on('click',function() {
				var pos = [this.id[5], this.id[6]];
				if (game.valid(pos)) {
					//Valid Move
					game.placeMark(pos);
				  $(this).text(game.player);
				  game.switchPlayer();
					console.log("winner = " + game.winner());
					if (game.winner() !== null) {
						$('#messages').text(game.winner() + " won!");
					} else {
						$('#messages').text(game.player + "'s turn.");
					}
				}
			});
		}
	}
});