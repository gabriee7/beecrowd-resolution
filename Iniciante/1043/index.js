var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var pontA = parseFloat(line[0])
var pontB = parseFloat(line[1])
var pontC = parseFloat(line[2])

if((pontA + pontB) > pontC && (pontA + pontC) > pontB && (pontB + pontC) > pontA){
    console.log('Perimetro = ' + (pontA+pontB+pontC).toFixed(1))
}else{
    var area = (pontA+pontB) * pontC / 2
    console.log('Area = '+ area.toFixed(1))
}
