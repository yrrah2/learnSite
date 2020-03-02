var kana = [

["ا","و","ي","ع","غ"],
["ب","ت","ث","ن","ج","ح","خ"],
["ر","ز","س","ش","ص","ض"],
["د","ذ","ك","ل","م"],
["ط","ظ","ف","ق","ه"],		
["ا","و","يـ","عـ","غـ"],		
["بـ","تـ","ثـ","نـ","جـ","حـ","خـ"],
["ر","ز","سـ","شـ","صـ	ضـ"],
["د","ذ","كـ","لـ","مـ"],	
["طـ","ظـ","فـ","قـ","هـ"],
["ـا","ـو","ـيـ","ـعـ","ـغـ"],
["ـبـ","ـتـ","ـثـ","ـنـ","ـجـ","ـحـ","ـخـ"],
["ـر","ـز","ـسـ","ـشـ","ـصـ","ـضـ"],
["ـد","ـذ","ـكـ","ـلـ","ـمـ"],
["ـطـ","ـظـ","ـفـ","ـقـ","ـهـ"],
["ـا","ـو","ـي","ـع","ـغ"],
["ـب","ـت","ـث","ـن","ـج","ـح","ـخ"],
["ـر","ـز","ـس","ـش","ـص","ـض"],
["ـد","ـذ","ـك","ـل","ـم"],
["ـط","ـظ","ـف","ـق","ـه"]]


var romanji = [
["a","u","i","\'","gh"],
["b","t","th","n","j","h.","kh"],
["r","z","s","sh","s.","d."],
["d","dh","k","l","m"],
["t.","z.","f","q","h"],
["a","u","i","\'","gh"],
["b","t","th","n","j","h.","kh"],
["r","z","s","sh","s.","d."],
["d","dh","k","l","m"],
["t.","z.","f","q","h"],
["a","u","i","\'","gh"],
["b","t","th","n","j","h.","kh"],
["r","z","s","sh","s.","d."],
["d","dh","k","l","m"],
["t.","z.","f","q","h"],
["a","u","i","\'","gh"],
["b","t","th","n","j","h.","kh"],
["r","z","s","sh","s.","d."],
["d","dh","k","l","m"],
["t.","z.","f","q","h"]
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

		kana_now = Array();
		romanji_now = Array();
		for (i = 0; i < checkedBoxes.length; i++) {
			kana_now = kana_now.concat(kana[checkedBoxes[i].value])
			romanji_now = romanji_now.concat(romanji[checkedBoxes[i].value])
		}
		
		change_image();
	}
}

function isolated() {
	$("#isolated").css("display", "table");
	$("#initial").css("display", "none");
	$("#middle").css("display", "none");
	$("#final").css("display", "none");
	
	$("#isolated_tab").css("background-color", "#eb8484");
	$("#initial_tab").css("background-color", "transparent");
	$("#middle_tab").css("background-color", "transparent");
	$("#final_tab").css("background-color", "transparent");
}

function initial() {
	$("#isolated").css("display", "none");
	$("#initial").css("display", "table");
	$("#middle").css("display", "none");
	$("#final").css("display", "none");

	$("#isolated_tab").css("background-color", "transparent");
	$("#initial_tab").css("background-color", "#eb8484");
	$("#middle_tab").css("background-color", "transparent");
	$("#final_tab").css("background-color", "transparent");
}

function middle() {
	$("#isolated").css("display", "none");
	$("#initial").css("display", "none");
	$("#middle").css("display", "table");
	$("#final").css("display", "none");

	$("#isolated_tab").css("background-color", "transparent");
	$("#initial_tab").css("background-color", "transparent");
	$("#middle_tab").css("background-color", "#eb8484");
	$("#final_tab").css("background-color", "transparent");
}

function final_() {
	$("#isolated").css("display", "none");
	$("#initial").css("display", "none");
	$("#middle").css("display", "none");
	$("#final").css("display", "table");

	$("#isolated_tab").css("background-color", "transparent");
	$("#initial_tab").css("background-color", "transparent");
	$("#middle_tab").css("background-color", "transparent");
	$("#final_tab").css("background-color", "#eb8484");
}

window.onload = showbox;
