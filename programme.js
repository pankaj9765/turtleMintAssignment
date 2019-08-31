// var string = prompt("Enter your string");
var string ="abcdefghij";
var integer32Bit = 2147483647;
var upperCaseString = string.toUpperCase();
var characters = {
  eachCharacterValue: {

  },
  sumOfCharacters: 0,
  shortestString: '',
};
var sum = 0;

for(let i = 0; i < upperCaseString.length; i++) {
  let seriesValue = 0;
  let substractValue = 0;
  for(let j= 64; j <= upperCaseString.charCodeAt(i); j++ ) {
    seriesValue = (seriesValue * 2 ) + j % 64;
  }
  sum += seriesValue;
  characters.eachCharacterValue[upperCaseString[i]] = seriesValue;
}
characters.sumOfCharacters = sum;

// while(integer32Bit) {
//   let currentSum = 0;
//   let previousSum = 0;
//   let currentCharacterCode = 65;
//   let previousCharacterCode = 65;
//   for(i = 1; i <= 32; i++) {
//     currentSum = ( currentSum * 2) + i;
//     previousSum = (previousSum * 2) + i;
//     console.log(currentSum);
//     console.log(previousSum);
//   }
// }

var shortestString = {};

let currentSum = 0;
for(i = 1; i <= 32; i++) {
  currentSum = ( currentSum * 2) + i;
  shortestString[String.fromCharCode(64+i)] = currentSum;
}
console.log(shortestString);

console.log('Character value of each charcter in string :', characters.eachCharacterValue);
console.log('sum of characters value', characters.sumOfCharacters);
console.log('shortest string: ', characters.shortestString);

