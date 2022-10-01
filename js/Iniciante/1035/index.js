var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ')

var intA = parseInt(lines[0])
var intB = parseInt(lines[1])
var intC = parseInt(lines[2])
var intD = parseInt(lines[3])

if(intB > intC && intD > intA && intC + intD > intA + intB && intC > 0 && intD > 0 ){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}