var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

var count = 0

line.forEach(t => {
    if(t > 0){
        count++
    }
})

console.log(count + ' valores positivos')