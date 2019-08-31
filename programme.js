function calculateValue(string) {
  let sum = 0;
  for(let i = 0; i < string.length; i++) {
    let seriesValue = 0;
    for(let j= 64; j <= string.charCodeAt(i); j++ ) {
      seriesValue = (seriesValue * 2 ) + j % 64;
    }
    sum += seriesValue;
  }
  return sum;
}

console.log('Character Value', calculateValue('D'));
console.log('String Value', calculateValue('ABC'));