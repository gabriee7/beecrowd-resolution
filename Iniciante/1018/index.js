var input = require('fs').readFileSync('index', 'utf8');
var value = input.split('\n')

const banknotes = [100, 50, 20, 10, 5, 2, 1]
var remainder = parseInt(value[0])
var totalOfBankNotes 

console.log(remainder)
banknotes.forEach(note => {
    totalOfBankNotes = Math.floor(remainder / note)
    remainder = remainder % note
    console.log(totalOfBankNotes + ' note(s) de R$ '+note+',00')

})

//CODIGO NÃO ACEITO NO BEECROWD