var input = require('fs').readFileSync('index', 'utf8');
var line = input.split(' ')

var n1 = parseInt(line[0])
var n2 = parseInt(line[1])
var n3 = parseInt(line[2])

if(n1 < n2 && n1 < n3 && n2 < n3){
    console.log(n1+'\n'+n2+'\n'+n3+'\n')
}else if(n1 < n2 && n2 > n3 && n1 < n3){
    console.log(n1+'\n'+n3+'\n'+n2+'\n')
}else if(n2 < n1 && n2 < n3 && n1 < n3){
    console.log(n2+'\n'+n1+'\n'+n3+'\n')
}else if(n2 < n1 && n2 < n3 && n1 > n3){
    console.log(n2+'\n'+n3+'\n'+n1+'\n')
}else if(n3 < n1 && n2 > n3 && n1 > n2){
    console.log(n3+'\n'+n2+'\n'+n1+'\n')
}else if(n3 < n1 && n2 > n3 && n1 < n2){
    console.log(n3+'\n'+n1+'\n'+n2+'\n')
}


line.forEach( t => {
    console.log(t)
})


