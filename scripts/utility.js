function hideElementById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.add("hidden");
}

function showElementById(elementId) {
	const element = document.getElementById(elementId);
	element.classList.remove("hidden");
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementById(elementId, value){
    const element = document.getElementById(element);
    element.innerText = value;
}


function getArandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

// function getArandomAlphabet() {
// 	const alphabetString = "abcdefghijklmnopqrstuvwxyz";
// 	const alphabets = alphabetString.split("");
// 	console.log(alphabets);

// 	// get a random index between 0 - 25
// 	const randomNumber = Math.random() * 25;
// 	const index = Math.round(randomNumber);
	
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }
