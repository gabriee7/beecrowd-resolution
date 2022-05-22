var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ');

var bigger = Math.max.apply(null, lines)

console.log(bigger + ' eh o maior')


