var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var valueA = parseInt(line[0])
var valueB = parseInt(line[1])
var verify

if(valueA > valueB){
    verify = valueA % valueB
}else{
    verify = valueB % valueA
}

if(verify == 0){
    console.log('Sao Multiplos')
}else{
    console.log('Nao sao Multiplos')
}


// NÃO ACEITO NO BEECROWD
// switch(verify){
//     case 0:
//         console.log('Sao Multiplos')
//         break
//     case 1:
//         console.log('Nao sao Multiplos')
//         break
// }
