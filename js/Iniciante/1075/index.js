var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

for(var i = 1; i < 10000; i++){
    if(i % line[0] == 2){
        console.log(i)
    }
}