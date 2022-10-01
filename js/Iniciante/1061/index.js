// var input = require('fs').readFileSync('index', 'utf8');
// var line = input.split('\n')

// var dayInit = line[0].split(' ')
// var init = line[1].split(':')
// var hourInit = init[0]
// var minuteInit = init[1]
// var secondInit = init[2]
// // console.log(dayInit[1] + '\n' + hourInit + '\n' + minuteInit + '\n' + secondInit + '\n'  )

// var dayFinal = line[2].split(' ')
// var final = line[3].split(':')
// var hourFinal = final[0]
// var minuteFinal = final[1]
// var secondFinal = final[2]

// var count = []

// // console.log(dayFinal[1] + '\n' + hourFinal + '\n' + minuteFinal + '\n' + secondFinal )

// var segundoAcumuladoInicial = Math.abs(86400 - ((hourInit / 3600) + (minuteInit / 60) + secondInit))
// var diaAcumulado = (dayFinal[1] - (dayInit[1] - 1) )
// var segundoAcumuladoFinal = ((hourInit * 3600) + (minuteInit * 60) + secondInit)

// console.log(segundoAcumuladoInicial + '\n ' + diaAcumulado + '\n ' + segundoAcumuladoFinal)

// var input = 2
// var count = 0

// for(i = 1; i <= input; i++){
//     if(input%i == 0){
//         count++
//     }
// }

// if(count == 2){
//     console.log('Número é primo')
// }else{
//     console.log('Número não é primo')
// }


// var arrayN = [[1,2,3,4,5],[5,4,3,2,1],[2,1,4,3,5],[5,3,1,2,4],[3,1,2,5,4]]

// for(i=0; i <= arrayN.length; i++){
//     console.log(arrayN[i][i])
// }

var inputYear = 2000
var mul4, mul100, mul400 = 0

if(inputYear%4 == 0){
    mul4 = 1
}if(inputYear%100 == 0){
    mul100 = 1
}if(inputYear%400 == 0){
    mul400 = 1
}

if(mul100 == 1 || mul4 == 0 || mul400 == 0){
    console.log('Não é ano bissexto')
}else{
    console.log('É ano bissexto')
}
