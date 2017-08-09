var question = ["What animal do you like?","What color would they be?", "What size would you prefer?"];
var choice1 = ["Dog","Black","Big"];
var choice2 = ["Cat","White", "Small"];
var picked = "";
var i = 0;

document.getElementById("buttonNext").onclick = function() {change(), initialize(), play()};

function play() {
	if (document.getElementById("question").textContent == question[0]) {
		picked = "";
	} else {

	}
};

document.getElementById("choice1").onclick = function() {
	//alert(document.getElementById("choice1").value);
	document.getElementById("question").classList.add("hidden");
	picked = picked + document.getElementById("choice1").value;
	document.getElementById("resultImage").src = "img/"+ picked + ".jpg";
	document.getElementById("choice1").classList.add("hidden");
	document.getElementById("choice2").classList.add("hidden");
	document.getElementById("buttonNext").classList.remove("hidden");
};

document.getElementById("choice2").onclick = function() {
	//alert(document.getElementById("choice2").value);
	picked = picked + document.getElementById("choice2").value;
	document.getElementById("resultImage").src = "img/"+ picked + ".jpg";
	document.getElementById("choice1").classList.add("hidden");
	document.getElementById("choice2").classList.add("hidden");
	document.getElementById("buttonNext").classList.remove("hidden");
};

function initialize(){
	document.getElementById("buttonNext").innerHTML = "Next"
	document.getElementById("question").classList.remove("hidden");
	document.getElementById("choice1").classList.remove("hidden");
	document.getElementById("choice2").classList.remove("hidden");
	document.getElementById("resultImage").classList.remove("hidden");
};

function change(){
	document.getElementById("buttonNext").classList.add("hidden");
	document.getElementById("question").innerHTML = question[i];
	document.getElementById("choice1").innerHTML = choice1[i];
	document.getElementById("choice2").innerHTML = choice2[i];
	document.getElementById("choice1").value = choice1[i];
	document.getElementById("choice2").value = choice2[i];

	if (i < 2) {
		i = i + 1;
	} else {
		i = 0;
	};
};
