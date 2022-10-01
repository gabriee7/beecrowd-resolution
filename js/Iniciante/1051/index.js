var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

var salary = parseFloat(line[0])
var totalIR = 0

if(salary > 2000){
    if(Math.abs(2000 - salary) > 1000){
        totalIR += 1000 * 0.08
    }else{
        totalIR += Math.abs(2000 - salary) * 0.08
    }
}if(salary > 3000){
    if(Math.abs(3000 - salary) > 1500){
        totalIR += 1500 * 0.18
    }else{
        totalIR += Math.abs(salary - 3000) * 0.18
    }
}if(salary > 4500){
    totalIR += Math.abs(salary - 4500) * 0.28
}

if(salary <= 2000){
    console.log('Isento')
}else{
    console.log('R$ ' +totalIR.toFixed(2))
}
