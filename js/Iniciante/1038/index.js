var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ')

const menu = {
    a: ['Cachorro Quente', 4.00],
    b: ['X-Salada', 4.50],
    c: ['X-bacon', 5.00],
    d: ['Torrada Simples', 2.00],
    e: ['Refrigerante', 1.50]
}

var chosenOption = lines[0]
var quantity = lines[1]
var total

switch(chosenOption){
    case '1':
        total = parseFloat(menu.a[1]) * quantity
        console.log('Total: R$ ' + total.toFixed(2))
        break
    case '2':
        total = parseFloat(menu.b[1]) * quantity
        console.log('Total: R$ ' + total.toFixed(2))
        break
    case '3':
        total = parseFloat(menu.c[1]) * quantity
        console.log('Total: R$ ' + total.toFixed(2))
        break
    case '4':
        total = parseFloat(menu.d[1]) * quantity
        console.log('Total: R$ ' + total.toFixed(2))
        break
    case '5':
        total = parseFloat(menu.e[1]) * quantity
        console.log('Total: R$ ' + total.toFixed(2))
        break
}

