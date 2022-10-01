var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var b = parseInt(lines[1])
var a = parseInt(lines[0])
var soma = a + b

console.log('SOMA = '+ soma)