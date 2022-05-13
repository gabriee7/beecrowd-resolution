var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var notaA = parseFloat(lines[0]).toFixed(1)
var notaB = parseFloat(lines[1]).toFixed(1)

var media = ((notaA * 3.5) + (notaB * 7.5)) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)