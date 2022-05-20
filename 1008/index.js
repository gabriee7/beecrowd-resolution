var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split('\n');

var employeeNumber = parseInt(lines[0])
var workedHours = parseInt(lines[1])
var hourlyWage = parseFloat(lines[2])


// Não aceito no beecrowd
// console.log(`NUMBER = ${employeeNumber} \nSALARY = U$ ${(workedHours * hourlyWage).toFixed(2)}`)

// Aceito no beecrowd
console.log('NUMBER = ' + employeeNumber + '\nSALARY = U$ ' + (workedHours * hourlyWage).toFixed(2)) 