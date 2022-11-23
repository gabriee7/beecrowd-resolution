var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n');

const N = line.length
var i, pos, larger = 0

for(i=0; i < N; i++){
    if(parseInt(line[i]) > larger){
        larger = parseInt(line[i])
        pos = i+1
    }
}

console.log(larger +'\n' + pos)