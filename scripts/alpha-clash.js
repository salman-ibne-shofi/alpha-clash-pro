function play() {
// step-1: hide the home scren. to hide the screen add class hidden to the home section
const homeSection = document.getElementById("home-screen");
homeSection.classList.add("hidden");

// show the playground
const playgroundSection = document.getElementById("play-ground");
playgroundSection.classList.remove('hidden');
console.log(playgroundSection.classList)
}

function handleKeyboardKeyUpEvent(event) {
	// const playerPressed = event.key;
	const playerPressed = event.key;
	console.log(event.key);

	// get the expected to press
	const currentAlphabetElement = document.getElementById("current-alphabet");
	const currentAlphabet = currentAlphabetElement.innerText;
	const expectedAlphabet = currentAlphabet.toLowerCase();
	console.log(playerPressed, currentAlphabet);

	// check right or wrong key pressed
	if (playerPressed === expectedAlphabet) {
		console.log("you get a point");

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);





        // -------------------------------------
		// update score:
		// 1. get the current score
		// const currentScoreElement = document.getElementById("current-score");
		// const currentScoreText = currentScoreElement.innerText;
		// const currentScore = parseInt(currentScoreText);
        // const currentScore = getElementValueById('current-score');

		// // 2. increase the score by 1
		const newScore = currentScore + 1;

		// // 3. show the updated score
		// currentScoreElement.innerText = newScore;

		// start a new round:
		removeBackgroundColorById(expectedAlphabet);
		continueGame();
	} else {
		console.log("dhurrr vaia va apu...right key press koro");

        constcurrentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);

        if(updatedLife ===0){

        }

        // --------------------------------------------
		// step-1: get the current life number
		// const currentLifeElement = document.getElementById('current-life');
		// const currentLifeText = currentLifeElement.innerText;
		// const currentLife = parseInt(currentLifeText);
		// // step-2: reduce the life count
		// const newLife = currentLife - 1;

		// // step-3: display thye update life count
		// currentLifeElement.innerText = newLife;
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

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
	hideElementById("home-screen");
    hideElementById('final-score');
	showElementById("play-ground");

    // reset score and life
    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);

	continueGame();
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}