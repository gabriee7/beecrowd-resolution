var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var value = parseFloat(line[0])

if(value >= 0 && value <= 25){
    console.log('Intervalo [0,25]')
}else if(value > 0 && value <= 50){
    console.log('Intervalo (25,50]')
}else if(value > 0 && value <= 75){
    console.log('Intervalo (50,75]')
}else if(value > 0 && value <= 100){
    console.log('Intervalo (75,100]')
}else{
    console.log('Fora de intervalo')
}


