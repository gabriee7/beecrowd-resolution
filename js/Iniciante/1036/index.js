var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ')

var intA = parseFloat(lines[0])
var intB = parseFloat(lines[1])
var intC = parseFloat(lines[2])

var delta = Math.pow(intB, 2) - 4 * intA * intC

function bhaskara() {
    if( 2 * intA <= 0 || delta < 0){
        console.log('Impossivel calcular')
    }else{
        var result1 = (-intB + Math.sqrt(delta)) / (2 * intA) 
        var result2 = (-intB - Math.sqrt(delta)) / (2 * intA) 
        console.log('R1 = '+result1.toFixed(5) +'\nR2 = '+ result2.toFixed(5))
    }
}

bhaskara()


