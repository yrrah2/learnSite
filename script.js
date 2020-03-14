var kana_now = script[0]
var romanji_now = latin[0];

var rnd = 0;
var result = "Wrong!";

var correct = 0;
var incorrect = 0;

var update = 0;


function change_image() 
{
	document.getElementById("scolding").innerHTML = '';
	document.getElementById("answer").innerHTML = ''
	
	var current = rnd;
	while (rnd === current) {
		rnd = Math.floor(Math.random() * kana_now.length);
	};

	document.getElementById("character").innerHTML = kana_now[rnd]
	update = 0;
};

function check()
{
	var textValue = document.getElementById('typetext').value;
	
	if ( romanji_now[rnd].toUpperCase() == textValue.toUpperCase() ){
		if (update == 1){
			showbox();
		}
		change_image();
		correct++ 
	}
	else { document.getElementById("scolding").innerHTML = result; incorrect++; document.getElementById("answer").innerHTML = romanji_now[rnd] }


	document.getElementById("correct").innerHTML = correct;
	document.getElementById("incorrect").innerHTML = incorrect;

	document.getElementById("typetext").value = '';
};

$(document).ready(function() {
$("#typetext").keyup(function(event) {
	if (event.keyCode == 13) {
		check();
	}
});
});

function showbox() {
	var checkedBoxes = document.querySelectorAll('input.checkbox:checked');

	if (checkedBoxes.length == 0) {alert("You are an idiot")} else {

		kana_now = script_type;
		romanji_now = Array();
		for (i = 0; i < checkedBoxes.length; i++) {
			kana_now = kana_now.concat(script[checkedBoxes[i].value])
			romanji_now = romanji_now.concat(latin[checkedBoxes[i].value])
		}
		change_image();
	}
}

function update_selection() {
	update = 1;
}

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

window.onload = showbox;
