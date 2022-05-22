var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(' ')
var p2 = lines[1].split(' ')

var distance = Math.sqrt((Math.pow(p2[0] - p1[0], 2) + (Math.pow(p2[1] - p1[1], 2))))

console.log(distance.toFixed(4))