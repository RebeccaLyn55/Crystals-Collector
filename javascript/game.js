$(document).ready(function() {
	var win=false;
	var wins=0;
	var lose=false;
	var losses=0;

	//Generate random number between 19 and 120 for user to see
	var targetNumber;
	targetNumber = Math.floor(Math.random() * 102) + 19;
	
	//Replacing innerHTML of number-to-guess div with targetNumber variable
	$('#number-to-guess').html(targetNumber);
	
	//Initialize variable to add numbers generated from crystal clicks
	var counter = 0;
	
	//Create a function for the four crystal options - each crystal has a random number between 1 and 12
	function randcrys(){
		return Math.floor(Math.random() * 12) + 1;
	};
	
	//Create array of image objects
	var imgSrc = ['assets/images/emerald.jpg', 'assets/images/ruby.jpg', 'assets/images/sapphire.jpg', 'assets/images/yellow.jpg'];
	
	//For loop to create crystal images for every imgSrc
	for (var i = 0; i < imgSrc.length; i++) {
		// For each iteration, create an imageCrystal
		var imageCrystal = $('<img>');
		//Each crystal will be given the class '.crystal-image'
		imageCrystal.addClass("crystal-image");
		// Each imageCrystal will be given a src link to four individual crystal images
		imageCrystal.attr("src", imgSrc[i]);
		// Each imageCrystal will be given a data attribute called data-crystalvalue
		// This data attribute will be set equal to function randcrys
		imageCrystal.attr("data-crystalvalue", randcrys());
		// Each crystal image (with all it classes and attributes) will get added to the page
		$("#crystals").append(imageCrystal);
	  }
	  
	//Start a New Game function
	function newGame(){
		$('#number-to-guess').html(" ");

		targetNumber = Math.floor(Math.random() * 102) + 19;
		$('#number-to-guess').html(targetNumber);
		$('#added-score').html(counter=0);
		$('#added-score').html(" ");
		$('#added-score').html(" ");
		
		
		imageCrystal=[];
		var crystalChildren =  $("#crystals").children();
		
		for (var i = 0; i < crystalChildren.length; i++){
			$(crystalChildren[i]).attr("data-crystalvalue", randcrys());
		}			
	}
	
	// Click event for each crystal image
	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr('data-crystalvalue'));
		crystalValue = parseInt(crystalValue);
		$('#winlosegraphic').html(" ");
		$('#winOrlose').html(" ");
		
		//Value of the crystal added to a counter
		counter += crystalValue;

		//Value of the crystal added to a counter
		$('#added-score').html(counter);
			//If user wins
			if (counter === targetNumber) {
			wins++;
			$('#winOrlose').html('You win!');
			win=true;
			$('#wins').html('Wins: ' + wins);
			$('#winlosegraphic').append('<img id="win-image" src="assets/images/winner.jpeg"/>');
			newGame();
		}
			//If user loses
			else if (counter > targetNumber) {
			losses++;
			$('#winOrlose').html('You lose!');
			var lose=true;
			$('#losses').html('Losses: ' + losses);
			$('#winlosegraphic').append('<img id="lose-image" src="assets/images/loser.png"/>');
			newGame();
			}
	  });
 });