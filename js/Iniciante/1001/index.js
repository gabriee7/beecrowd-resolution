var input = require('fs').readFileSync('input', 'utf8');
var number = input.split('\n');

console.log(`X = ${parseInt(number[0]) + parseInt(number[1])}`)
