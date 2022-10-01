var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
 
const month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

var queryMonth = parseInt(line[0])

console.log(month[queryMonth])