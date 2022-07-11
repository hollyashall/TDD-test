// export const then variables

 export const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
  };




 export const translateEnglishToMorse = (letters, morse) =>{
const arrayKeys = Object.keys(morse);
console.log(arrayKeys);
let morseString="";
//looping through letters eg ["h","e", "l", "l","o"];
  for (let i = 0; i < letters.length; i++) {
  //looping through an array of keys of morse
    for (let j = 0; j < arrayKeys.length; j++) {
      if (letters[i] == arrayKeys[j]) {
        console.log(morse[arrayKeys[j]]);
        morseString= morseString + morse[arrayKeys[j]]+ " ";

      } else {
        console.log("this is not right");
        }
      
    }
     
  
  }
  return morseString;
}
const letters = ["h","e", "l", "l","o"];
translateEnglishToMorse(letters, morseCode);

