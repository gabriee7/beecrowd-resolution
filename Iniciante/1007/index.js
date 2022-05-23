var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var numA = parseInt(lines[0])
var numB = parseInt(lines[1])
var numC = parseInt(lines[2])
var numD = parseInt(lines[3])

var diferenca = (numA * numB) - (numC * numD)

console.log(`DIFERENCA = ${diferenca}`)