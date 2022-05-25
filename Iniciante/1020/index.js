var input = require('fs').readFileSync('index', 'utf8');
var value = input.split('\n')

const temp = [365, 30, 1]
var inputInt = parseInt(value[0])
var remnant
var accumulated = []

temp.forEach( t => {
    if((inputInt / t).toFixed(0) > 0){
        remnant = inputInt - (t * parseInt(inputInt / t))
        accumulated = [...accumulated, parseInt(inputInt / t)]
        inputInt = remnant
    }else{
        accumulated = [...accumulated, 0]
    }
})

console.log(accumulated[0] + ' ano(s)\n'+
            accumulated[1] + ' mes(es)\n'+
            accumulated[2] + ' dia(s)\n'
            )

