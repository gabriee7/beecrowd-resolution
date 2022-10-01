var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ');

const pi = 3.14159
var inputA = parseFloat(lines[0])
var inputB = parseFloat(lines[1])
var inputC = parseFloat(lines[2])
var triangle = inputA * inputC /2
var circle = Math.pow(inputC, 2) * pi
var trapeze = (inputA + inputB) / 2 * inputC
var square = inputB * inputB
var rectangle = inputA * inputB

console.log('TRIANGULO: '+ triangle.toFixed(3) +'\n'+
            'CIRCULO: '+ circle.toFixed(3) +'\n'+
            'TRAPEZIO: '+ trapeze.toFixed(3) + '\n'+
            'QUADRADO: '+ square.toFixed(3) + '\n'+ 
            'RETANGULO: '+ rectangle.toFixed(3)            
            )
