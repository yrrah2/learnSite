var script_now = script[0];
var latin_now = latin[0];

var incorrect_message = "Wrong!";

var correct = 0;
var incorrect = 0;

var rnd = 0;
var update = 0;

function new_character() 
{
	$("#scolding").text('');							// Remove the scolding message
	$("#answer").text('');								// Remove the shown answer
	
	var current = rnd;								// Remember the current character
	while (rnd === current) {							// Make sure the character isn't the same one
		rnd = Math.floor(Math.random() * script_now.length);			// Choose a random character
	};

	$("#character").text(script_now[rnd]);						// Show the chosen character
};

function check()
{
	var textValue = $('#typetext').val(); 						// Get the answer from the input box
	
	if ( latin_now[rnd].toUpperCase() == textValue.toUpperCase() ){ 		// Check if the answer is correct, case independent
		if ( update == 1 ) { showbox(); update = 0 }; 				// If the selection of characters has changed, update them
		new_character(); 							// Show a new character from the selection
		correct++ ; 								// Increase number of correct answers
		$("#correct").text(correct);						// Update the correct score
	} else { 
		$("#scolding").text(incorrect_message);					// Tell the user they got the answer wrong
		$("#answer").text(latin_now[rnd]);					// Show the correct answer
		incorrect++;								// Increase number of incorrect answers
		$("#incorrect").text(incorrect);					// Update the incorrect score
	}

	$("#typetext").val('');								// Remove the text from the input box
};

// Runs check() if the enter key is pressed while typing an answer
$(document).ready(function() {
	$("#typetext").keyup(function(event) {
		if (event.keyCode == 13) {
			check();
		}
	});
});

function showbox() {
	var checkedBoxes = $("input.checkbox:checked");					// Get all checked checkboxes

	if (checkedBoxes.length == 0) { alert("You are an idiot") } else {		// Make sure at least one is checked
		script_now = script_type;						// Empty the current character selection
		latin_now = Array();							// Empty the current latin transliterations
		for (i = 0; i < checkedBoxes.length; i++) {				// For each of the checked checkboxes
			script_now = script_now.concat(script[checkedBoxes[i].value])	// Add the relevant characters to the character selection
			latin_now = latin_now.concat(latin[checkedBoxes[i].value])	// Add the relevant transliterations to the latin selection
		}
	}
}

function update_selection() { update = 1 };						// Update the character selection after the next correct answer

// Switch to table 1, highlight the table 1 tab
function table_1() {
	$("#table_1").css("display", "table");
	$("#table_2").css("display", "none");
	$("#table_3").css("display", "none");
	$("#table_4").css("display", "none");
	
	$("#tab_1").css("background-color", "#eb8484");
	$("#tab_2").css("background-color", "transparent");
	$("#tab_3").css("background-color", "transparent");
	$("#tab_4").css("background-color", "transparent");
}

// Switch to table 2, highlight the table 2 tab
function table_2() {
	$("#table_1").css("display", "none");
	$("#table_2").css("display", "table");
	$("#table_3").css("display", "none");
	$("#table_4").css("display", "none");
	
	$("#tab_1").css("background-color", "transparent");
	$("#tab_2").css("background-color", "#eb8484");
	$("#tab_3").css("background-color", "transparent");
	$("#tab_4").css("background-color", "transparent");
}

// Switch to table 3, highlight the table 3 tab
function table_3() {
	$("#table_1").css("display", "none");
	$("#table_2").css("display", "none");
	$("#table_3").css("display", "table");
	$("#table_4").css("display", "none");
	
	$("#tab_1").css("background-color", "transparent");
	$("#tab_2").css("background-color", "transparent");
	$("#tab_3").css("background-color", "#eb8484");
	$("#tab_4").css("background-color", "transparent");
}

// Switch to table 4, highlight the table 4 tab
function table_4() {
	$("#table_1").css("display", "none");
	$("#table_2").css("display", "none");
	$("#table_3").css("display", "none");
	$("#table_4").css("display", "table");

	$("#tab_1").css("background-color", "transparent");
	$("#tab_2").css("background-color", "transparent");
	$("#tab_3").css("background-color", "transparent");
	$("#tab_4").css("background-color", "#eb8484");
}

function pageload() { 
	showbox();
	new_character();
}

window.onload = pageload;
