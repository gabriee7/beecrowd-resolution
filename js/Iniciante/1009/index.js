var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var employeeName = lines[0]
var fixedSalary = parseFloat(lines[1])
var salesPerformMouth = parseFloat(lines[2])

console.log('TOTAL = R$ ' + (fixedSalary + (salesPerformMouth * 0.15)).toFixed(2))
