var input = require('fs').readFileSync('index', 'utf8');
var line = input.split('\n')
 
var class1 = line[0]
var class2 = line[1]
var class3 = line[2]

if(class1 == 'vertebrado'){
    if(class2 == 'ave'){
        if(class3 == 'carnivoro'){
            console.log('aguia')
        }else if(class3 == 'onivoro'){
            console.log('pomba')
        }
    }else if(class2 == 'mamifero'){
        if(class3 == 'onivoro'){
            console.log('homem')
        }else if(class3 == 'herbivoro'){
            console.log('vaca')
        }
    }
}else if(class1 == 'invertebrado'){
    if(class2 == 'inseto'){
        if(class3 == 'hematofago'){
            console.log('pulga')
        }else if(class3 == 'herbivoro'){
            console.log('lagarta')
        }
    }else if(class2 == 'anelideo'){
        if(class3 == 'hematofago'){
            console.log('sanguessuga')
        }else if(class3 == 'onivoro'){
            console.log('minhoca')
        }
    }
}