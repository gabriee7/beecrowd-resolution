var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

// NÃO ACEITO NO BEECROWD

var initHour = parseInt(line[0])
var initMin = parseInt(line[1])
var finalHour = parseInt(line[2])
var finalMin = parseInt(line[3])
var durationInMinuter
var durationInHour = 0

durationInMinuter = (Math.abs( (finalHour * 60 + finalMin) - (initHour * 60 + initMin)))

if(durationInMinuter == 0){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
}else{
    while (durationInMinuter >= 60){
        durationInHour += 1
        durationInMinuter -= 60
    }
    console.log('O JOGO DUROU '+ durationInHour +' HORA(S) E '+ durationInMinuter + ' MINUTO(S)')
}


