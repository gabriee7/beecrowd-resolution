var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var salary = parseFloat(line[0])
var newSalary

if(salary <= 400){
    newSalary = salary * 1.15
    console.log('Novo salario: '+ newSalary.toFixed(2) + '\nReajuste ganho: ' + (salary * 0.15).toFixed(2) + '\nEm percentual: 15 %')
}else if(salary <= 800){
    newSalary = salary * 1.12
    console.log('Novo salario: '+ newSalary.toFixed(2) + '\nReajuste ganho: ' + (salary * 0.12).toFixed(2) + '\nEm percentual: 12 %')
}else if(salary <= 1200){
    newSalary = salary * 1.10
    console.log('Novo salario: '+ newSalary.toFixed(2) + '\nReajuste ganho: ' + (salary * 0.10).toFixed(2) + '\nEm percentual: 10 %')
}else if(salary <= 2000){
    newSalary = salary * 1.07
    console.log('Novo salario: '+ newSalary.toFixed(2) + '\nReajuste ganho: ' + (salary * 0.07).toFixed(2) + '\nEm percentual: 7 %')
}else{
    newSalary = salary * 1.04
    console.log('Novo salario: '+ newSalary.toFixed(2) + '\nReajuste ganho: ' + (salary * 0.04).toFixed(2) + '\nEm percentual: 4 %')
}
