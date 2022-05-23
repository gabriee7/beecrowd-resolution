var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var notaA = parseFloat(lines[0]).toFixed(1)
var notaB = parseFloat(lines[1]).toFixed(1)
var notaC = parseFloat(lines[2]).toFixed(1)

var media = ((notaA * 2) + (notaB * 3) + (notaC * 5)) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)