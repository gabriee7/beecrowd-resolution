var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

const pi = 3.14159
var raio = parseFloat(lines[0])
var volume = (4/3.0) * pi * Math.pow(raio, 3)

console.log('VOLUME = '+ volume.toFixed(3))
