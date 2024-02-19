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

function handleKeyboardKeyUpEvent(event) {
    // const playerPressed = event.key;
    const playerPressed = event.key;
	console.log(event.key);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);


    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('dhurrr vaia va apu... right key press koro')
    }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
	// step-1: generate a random alphabet
	const alphabet = getArandomAlphabet();
	// console.log("your random alphabet", alphabet);

	// set randomly generate alphabet to the screen (show it)
	const currentAlphabetElement = document.getElementById("current-alphabet");
	currentAlphabetElement.innerText = alphabet;
}

function play() {
	hideElementById("home-screen");
	showElementById("play-ground");
	continueGame();
}
