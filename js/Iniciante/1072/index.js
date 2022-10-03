var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
var i, countIn = 0, countOut=0 

for(i=1; i < (parseInt(line[0])+1); i++){
    if(line[i] >= 10 && line[i] <= 20){
        countIn++
    }else{
        countOut++
    }
}

console.log(countIn + ' in\n' + countOut + ' out')