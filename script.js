
import { morseCode, translateEnglishToMorse } from "./morse.js";

//Global variables
 
const englishInput = document.querySelector("#english-input");
const translateButton = document.querySelector(".main__button");
const morseOutput = document.querySelector(".main__translation")

//add event listener for morse button pressed
// do the event inner text target thing ?? change the display

translateButton.addEventListener("click", () => {
  console.log(morseOutput);
const lettersToConvert = englishInput.value.split("");
  console.log(lettersToConvert);

  const result = translateEnglishToMorse(lettersToConvert, morseCode);
  morseOutput.innerHTML = result
});



// make a function which turns letters into morse code
// call this function when button is pressed

//morse is an array, each letter is an object??


//show the output in the translation box



//make a reset button