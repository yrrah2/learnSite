﻿var kana = [
["աիըէեօոո"],
["տպկծճլ"],
["թփքցչռ"],
["դբգձջր"],
["սշֆղյ"],
["զժվխ"],
["նմւհ"]
]

var romanji = [
["a","i","i","e","e","o","o"],
["t","p","k","ts","ch","l"],
["t’","p’","k’","ts’","ch'","r"],
["d","b","g","dz","dzh","r’"],
["s","sh","f","rkh","y"],
["z","zh","v","kh"],
["n","m","v","h"]
]


var kana_now = kana[0]
var romanji_now = romanji[0];

var rnd = 0;
var result = "Wrong!";

var correct = 0;
var incorrect = 0;


function change_image() 
{
	document.getElementById("scolding").innerHTML = '';
	document.getElementById("answer").innerHTML = '';
	
	var current = rnd;
	while (rnd === current) {
		rnd = Math.floor(Math.random() * kana_now.length);
	};

	document.getElementById("character").innerHTML = kana_now[rnd]
};

function check()
{
	var textValue = document.getElementById('typetext').value;
	
	if ( romanji_now[rnd].toUpperCase() == textValue.toUpperCase() ){ change_image(); correct++ }
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

		kana_now = String();
		romanji_now = Array();
		for (i = 0; i < checkedBoxes.length; i++) {
			kana_now = kana_now.concat(kana[checkedBoxes[i].value])
			romanji_now = romanji_now.concat(romanji[checkedBoxes[i].value])
		}
		
		change_image();
	}
}

window.onload = showbox;
