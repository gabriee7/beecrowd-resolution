var input = require('fs').readFileSync('input', 'utf8');
var radius = input.split('\n');

const pi = 3.14159
var area
var r = parseFloat(radius[0])

area = pi * (Math.pow(r, 2))
console.log('A='+ area.toFixed(4))
