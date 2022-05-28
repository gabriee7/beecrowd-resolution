var input = require('fs').readFileSync('index', 'utf8');
var lines = input.split(' ')
var space = input.split('\n')

var note1 = parseFloat(lines[0])
var note2 = parseFloat(lines[1])
var note3 = parseFloat(lines[2])
var note4 = parseFloat(lines[3])
var noteExam = parseFloat(space[1])

var average = ((note1 * 2) + (note2 * 3) + (note3 * 4) + (note4 * 1)) / 10

if(average >= 7){
    console.log('Media: ' + average.toFixed(1) + '\nAluno aprovado.')
}else if(average >= 5){
    console.log('Media: ' + average.toFixed(1) + '\nAluno em exame.')
    console.log('Nota do exame: '+ noteExam.toFixed(1))
    var averageFinal = (average + noteExam) / 2
    if( averageFinal >= 5){
        console.log('Aluno aprovado.\nMedia final: ' + averageFinal.toFixed(1) )
    }else{
        console.log('Aluno reprovado.\nMedia final: ' + averageFinal.toFixed(1) )
    }
}else{
    console.log('Media: ' + average.toFixed(1) + '\nAluno reprovado.')
}