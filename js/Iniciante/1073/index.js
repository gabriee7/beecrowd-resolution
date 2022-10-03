var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
var i

for(i = 1; i <= line[0]; i++){
    if(i % 2 == 0){
        console.log(i + '^2 = ' + Math.pow(i, 2))   
    }
}