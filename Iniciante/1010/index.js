var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');
var parts1 = lines[0].split(' ')
var parts2 = lines[1].split(' ')
var subtotal1 = parseFloat(parts1[1] * parts1[2])
var subtotal2 = parseFloat(parts2[1] * parts2[2])

console.log('VALOR A PAGAR: R$ '+ (subtotal1 + subtotal2).toFixed(2))



