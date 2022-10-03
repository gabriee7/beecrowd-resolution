var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

var number1 = parseInt(line[0])
var number2 = parseInt(line[1])
var count = 0, i

if(number1 < number2){
    for(i=number1+1; i < number2; i++){
        if(i % 2 != 0){
            count += i
        }
    }
}else{
    for(i=number2+1; i < number1; i++){
        if(i % 2 != 0){
            count += i
        }
    }
}

console.log(count)