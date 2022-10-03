var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

var countPair = 0,countOdd = 0, countPositive = 0, countNegative = 0

line.forEach(t => {
    if(t % 2 === 0){
        countPair++
    }else{
        countOdd++
    }
    if(t > 0){
        countPositive++
    }else if(t < 0){
        countNegative++
    }
})

console.log(countPair + ' valor(es) par(es)')
console.log(countOdd + ' valor(es) impar(es)')
console.log(countPositive + ' valor(es) positivo(s)')
console.log(countNegative + ' valor(es) negativo(s)')

