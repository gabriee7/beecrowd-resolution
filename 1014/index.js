var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var travelledDistance = parseInt(lines[0])
var spentFuel = parseFloat(lines[1])

console.log((travelledDistance / spentFuel).toFixed(3) + ' km/l')