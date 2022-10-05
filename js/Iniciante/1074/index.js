var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
var i

for(i = 1; i <= line[0]; i++){
    if(line[i] % 2 === 0){
        if(line[i] > 0){
            console.log('EVEN POSITIVE')
        }else if(line[i] < 0){
            console.log('EVEN NEGATIVE')
        }else{
            console.log('NULL')
        }
    }else{
        if(line[i] > 0){
            console.log('ODD POSITIVE')
        }else if(line[i] < 0){
            console.log('ODD NEGATIVE')
        }else{
            console.log('NULL')
        }
    }

}