var kana = [["ക","ച","ട","ത","പ"],
	["ഖ","ഛ","ഠ","ഥ","ഫ"],
	["ഗ","ജ","ഡ","ദ","ബ"],
	["ഘ","ഝ","ഢ","ധ","ഭ"],
	["ങ","ഞ","ണ","ന","മ"],
	["യ","ര","ല","വ"],
	["ശ","ഷ","സ","ഹ"],
	["അ","ക","ആ","കാ"],
	["ഇ","കി","ഈ","കീ"],
	["ഉ","കു","ഊ","കൂ"],
	["എ","കെ","ഏ","കേ"],
	["ഒ","കൊ","ഓ","കോ"],
	["ഋ","കൃ","ൠ","കൄ"],
	["ഌ","കൢ","ൡ","കൣ"]]

var romanji = [["ka","ca","ta","ta.","pa"],
["kha","cha","tha","tha.","pha"],
["ga","ja","da","da.","ba"],
["gha","jha","dha","dha.","bha"],
["na.","nya","nae","na","ma"],
["ya","ra","la","va"],
["sha","sha.","sa","ha"],
["a","ka","aa","kaa"],
["i","ki","ii","kii"],
["u","ku","uu","kuu"],
["e","ke","ee","kee"],
["o","ko","oo","koo"]]


var kana_now = kana[0]
var romanji_now = romanji[0];

var rnd = 0;
var result = "Wrong!";

var correct = 0;
var incorrect = 0;


function change_image() 
{
	document.getElementById("scolding").innerHTML = '';
	document.getElementById("answer").innerHTML = ''
	
	var current = rnd;
	while (rnd === current) {
		rnd = Math.floor(Math.random() * kana_now.length);
	};

	document.getElementById("character").innerHTML = kana_now[rnd]
};

function check()
{
	var textValue = document.getElementById('typetext').value;
	
	if ( romanji_now[rnd] == textValue ){ change_image(); correct++ }
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

		kana_now = Array();
		romanji_now = Array();
		for (i = 0; i < checkedBoxes.length; i++) {
			kana_now = kana_now.concat(kana[checkedBoxes[i].value])
			romanji_now = romanji_now.concat(romanji[checkedBoxes[i].value])
		}
		
		change_image();
	}
}

function vowel() {
	$("#vowel").css("display", "table");
	$("#consonant").css("display", "none");

	$("#vowel_tab").css("background-color", "#eb8484");
	$("#consonant_tab").css("background-color", "transparent");
}

function consonant() {
	$("#vowel").css("display", "none");
	$("#consonant").css("display", "table");

	$("#vowel_tab").css("background-color", "transparent");
	$("#consonant_tab").css("background-color", "#eb8484");
}

window.onload = showbox;
