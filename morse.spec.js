//import the test 

//expect and it

import {expect, it } from "@jest/globals";
// import { morseCode } from "./morse";
// import { translateEnglishToMorse } from "./morse";
import { morseCode, translateEnglishToMorse } from "./morse.js";



it ("should convert hello to .... . .-.. .-.. ---" , () => {
const result = translateEnglishToMorse("hello");
expect(result).toBe(".... . .-.. .-.. ---")
})

it ("should convert 123 to . _ _ _ _ . . _ _ _ . . . _ _" , () => {
  const result = translateEnglishToMorse("123");
  expect(result).toBe(". _ _ _ _ . . _ _ _ . . . _ _")
  });
  
it (" should convert Holly123 to undefined", () =>{
  const result = translateEnglishToMorse("Holly123");
  expect(result).toBe("undefined")
});

it (" should convert "" to undefined", () =>{
  const result = translateEnglishToMorse(" ");
  expect(result).toBe("undefined")
});

it (" should convert "" to undefined", () =>{
  const result = translateEnglishToMorse("");
  expect(result).toBe("undefined")
});


// test what happens when you input "hello"
// test what happens when you input "123"
// test what happens when you input "Holly123"
// test what happens when you input " "
// test what happens when you input ""
