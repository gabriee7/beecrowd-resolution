var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var valueA = parseFloat(line[0])
var valueB = parseFloat(line[1])
var valueC = parseFloat(line[2])
var order = []

if(valueA >= valueB && valueA >= valueC && valueB >= valueC){
    order[0] = parseFloat(valueA)
    order[1] = parseFloat(valueB)
    order[2] = parseFloat(valueC)
}else if(valueA >= valueB && valueA >= valueC && valueC >= valueB){
    order[0] = parseFloat(valueA)
    order[1] = parseFloat(valueC)
    order[2] = parseFloat(valueB)
}else if(valueB >= valueA && valueB >= valueC && valueA >= valueC){
    order[0] = parseFloat(valueB)
    order[1] = parseFloat(valueA)
    order[2] = parseFloat(valueC)
}else if(valueB >= valueA && valueB >= valueC && valueC >= valueA){
    order[0] = parseFloat(valueB)
    order[1] = parseFloat(valueC)
    order[2] = parseFloat(valueA)
}else if(valueC >= valueB && valueC >= valueA && valueB >= valueA){
    order[0] = parseFloat(valueC)
    order[1] = parseFloat(valueB)
    order[2] = parseFloat(valueA)
}else if(valueC >= valueB && valueC >= valueA && valueB < valueA){
    order[0] = parseFloat(valueC)
    order[1] = parseFloat(valueA)
    order[2] = parseFloat(valueB)
}

if(order[0] >= (order[1] + order[2])){
    console.log('NAO FORMA TRIANGULO')
    return
}if( (Math.pow(order[0], 2)) == (Math.pow(order[1], 2) + (Math.pow(order[2], 2)))){
    console.log('TRIANGULO RETANGULO')
}if( (Math.pow(order[0], 2)) > (Math.pow(order[1], 2) + (Math.pow(order[2], 2)))){
    console.log('TRIANGULO OBTUSANGULO')
}if( (Math.pow(order[0], 2)) < (Math.pow(order[1], 2) + (Math.pow(order[2], 2)))){
    console.log('TRIANGULO ACUTANGULO')
}if(order[0] == order[1] &&  order[0] == order[2]){
    console.log('TRIANGULO EQUILATERO')
}if((order[0] != order[1] || order[0] != order[2])){
    if((order[0] == order[1] || order[1] == order[2] || order[0] == order[2])){
    console.log('TRIANGULO ISOSCELES')
}
}

