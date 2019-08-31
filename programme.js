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

console.log('Character value of each charcter in string :', characters.eachCharacterValue);
console.log('sum of characters value', characters.sumOfCharacters);

