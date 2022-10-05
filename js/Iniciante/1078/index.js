var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

for(var i = 1; i <= 10; i++){
    console.log(i + ' x ' + line[0] + ' = ' + line[0] * i)
}