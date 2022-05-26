var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
//NÃO ACEITO NO BEECROWD


const notes = [100, 50, 20, 10, 5, 2]
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

var value = parseFloat(line[0])
var count

console.log('NOTAS:')
notes.forEach( v => {
    if((v / value) > 0){
        count = parseInt(value / v)
        value = value % v
        console.log(count + ' nota(s) de R$ ' +v.toFixed(2))
    }else{
        count = 0
        console.log(count + ' nota(s) de R$ '+ v.toFixed(2))
    }
})

console.log('MOEDAS:')
coins.forEach( v => {
    if((v / value) > 0){
        count = parseInt(value / v)
        value = value % v
        console.log(count + ' nota(s) de R$ ' +v.toFixed(2))
    }else{
        count = 0
        console.log(count + ' nota(s) de R$ '+ v.toFixed(2))
    }
})
