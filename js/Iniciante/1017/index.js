var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

const rangeKmLiter = 12
var timeSpent = parseInt(lines[0])
var averageSpeed= parseInt(lines[1])
var qtLiters = (timeSpent * averageSpeed) / rangeKmLiter

console.log(qtLiters.toFixed(3))