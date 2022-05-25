var input = require('fs').readFileSync('index', 'utf8');
var value = input.split('\n')

const temp = [3600, 60, 1]
var inputInt = parseInt(value[0])
var remnant
var time = []

temp.forEach( t => {
    if((inputInt / t).toFixed(0) > 0){
        remnant = inputInt - (t * parseInt(inputInt / t))
        time = [...time, parseInt(inputInt / t)]
        inputInt = remnant
    }else{
        time = [...time, 0]
    }
})

console.log(time.join(':'))

