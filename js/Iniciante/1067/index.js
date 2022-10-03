var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

var number = line[0]
var i

for(i=0; i < number; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}