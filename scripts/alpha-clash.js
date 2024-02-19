// function play() {
// step-1: hide the home scren. to hide the screen add class hidden to the home section
// const homeSection = document.getElementById("home-screen");
// homeSection.classList.add("hidden");
// show the play ground

// show the playground
// const playgroundSection = document.getElementById("play-ground");
// playgroundSection.classList.remove('hidden');
// console.log(playgroundSection.classList)
// }

function continueGame() {
	// step-1: generate a random alphabet
	const alphabet = getArandomAlphabet();
	console.log("your random alphabet", alphabet);
}

// set randomly generated alphabet to the screen (show it)
const currentAlphabetElement = document.getElementById("current-alphabet");
currentAlphabetElement.innerText = alphabet;

// set randomly generate alphabet to the screen (show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

function play() {
	hideElementById("home-screen");
	showElementById("play-ground");
	continueGame();
}
