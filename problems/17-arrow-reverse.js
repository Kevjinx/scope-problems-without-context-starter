/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

// your code here!
const arrowReverseString = str => {
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");

}



let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
