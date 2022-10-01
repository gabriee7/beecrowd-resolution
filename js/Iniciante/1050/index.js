var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')

const codiDDD = {
    61: 'Brasilia',
    71: 'Salvador',
    11: 'Sao Paulo',
    21: 'Rio de Janeiro',
    32: 'Juiz de Fora',
    19: 'Campinas',
    27: 'Vitoria',
    31: 'Belo Horizonte'
}

var informed = line[0]

if(codiDDD[informed] == undefined){
    console.log('DDD nao cadastrado')
}else{
    console.log(codiDDD[informed])
}