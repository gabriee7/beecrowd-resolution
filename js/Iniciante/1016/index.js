var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines[0])

console.log(distance * 2 + ' minutos')
