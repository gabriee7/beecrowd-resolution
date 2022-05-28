var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ')

var axiX = parseFloat(lines[0])
var axiY = parseFloat(lines[1])

if(axiX === 0 && axiY === 0){
    console.log('Origem')
}else if(axiX === 0 && axiY !== 0){
    console.log('Eixo Y')
}else if(axiX !== 0 && axiY === 0){
    console.log('Eixo X')
}else if(axiX > 0 && axiY > 0){
    console.log('Q1')
}else if(axiX < 0 && axiY > 0){
    console.log('Q2')
}else if(axiX < 0 && axiY < 0){
    console.log('Q3')
}else if(axiX > 0 && axiY < 0){
    console.log('Q4')
}