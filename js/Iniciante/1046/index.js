var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var init = parseInt(line[0])
var final = parseInt(line[1])
var duration 


if(init == 0 && final == 0 || init == final){
    console.log('O JOGO DUROU 24 HORA(S)')
    return
}
if(init > final){
    duration = (Math.abs(init - 24) + final)
    console.log('O JOGO DUROU '+ duration + ' HORA(S)')
}else{
    duration = Math.abs(final - init)
    console.log('O JOGO DUROU '+ duration + ' HORA(S)')
}
