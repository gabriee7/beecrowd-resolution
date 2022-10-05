var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
var average = 0, j, i, mul = []

//insere no array de valores
for(i = 1; i <= line[0]; i++){
    for(j = 0; j < 3; j++){
        mul[j] = line[j+1].split(' ')
    }
}

//calcula media
for(i = 0; i < line[0]; i++){
    for(j = 0; j < 3; j++){
        if(j == 0){
            average += parseFloat(mul[i][j]) * 2 
        }else if(j == 1){
            average += parseFloat(mul[i][j]) * 3
        }else if(j == 2){
            average += parseFloat(mul[i][j]) * 5
        }
    }
    //imprime
    console.log((average / 10).toFixed(1))
    average = 0
}