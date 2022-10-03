var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

var number = parseInt(line[0])
var i

for(i=number; i < (number+12); i++){
    if(i % 2 != 0){
        console.log(i)
    }
}