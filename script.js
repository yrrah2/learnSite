var kana = ["あいうえお",
	"かきくけこ",
	"がぎぐげご",
	"さしすせそ",
	"ざじずぜぞ",
	"たちつてと",
	"だぢづでど",
	"なにぬねの",
	"はひふへほ",
	"ばびぶべぼ",
	"ぱぴぷぺぽ",
	"まみむめも",
	"やゆよ",
	"らりるれろ",
	"わを",
	"アイウエオ",
	"カキクケコ",
	"ガギグゲゴ",
	"サシスセソ",
	"ザジズゼゾ",
	"タチツテト",
	"ダヂヅデド",
	"ナニヌネノ",
	"ハヒフヘホ",
	"バビブベボ",
	"パピプペポ",
	"マミムメモ",
	"ヤユヨ",
	"ラリルレロ",
	"ワヲ"]

var romanji = [["a","i","u","e","o"],
	["ka","ki","ku","ke","ko",],
	["ga","gi","gu","ge","go",],
	["sa","shi","su","se","so",],
	["za","ji","zu","ze","zo",],
	["ta","chi","tsu","te","to",],
	["da","ji","dzu","de","do",],
	["na","ni","nu","ne","no",],
	["ha","hi","hu","he","ho",],
	["ba","bi","bu","be","bo",],
	["pa","pi","pu","pe","po",],
	["ma","mi","mu","me","mo",],
	["ya","yu","yo",],
	["ra","ri","ru","re","ro",],
	["wa","wo"],
	["a","i","u","e","o"],
	["ka","ki","ku","ke","ko",],
	["ga","gi","gu","ge","go",],
	["sa","shi","su","se","so",],
	["za","ji","zu","ze","zo",],
	["ta","chi","tsu","te","to",],
	["da","ji","dzu","de","do",],
	["na","ni","nu","ne","no",],
	["ha","hi","hu","he","ho",],
	["ba","bi","bu","be","bo",],
	["pa","pi","pu","pe","po",],
	["ma","mi","mu","me","mo",],
	["ya","yu","yo",],
	["ra","ri","ru","re","ro",],
	["wa","wo"]]


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
	var checkedString = '';

	kana_now = String();
	romanji_now = Array();
	for (i = 0; i < checkedBoxes.length; i++) {
		kana_now = kana_now.concat(kana[checkedBoxes[i].value])
		romanji_now = romanji_now.concat(romanji[checkedBoxes[i].value])
	}

	document.getElementById("display-output3").innerHTML = checkedString;

	change_image();
}

function hiragana() {
	$("#hiragana").css("display", "table");
	$("#katakana").css("display", "none");
	
	$("#hiragana_tab").css("background-color", "#eb8484");
	$("#katakana_tab").css("background-color", "transparent");
}

function katakana() {
	$("#hiragana").css("display", "none");
	$("#katakana").css("display", "table");

	$("#hiragana_tab").css("background-color", "transparent");
	$("#katakana_tab").css("background-color", "#eb8484");

}
