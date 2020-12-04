const utils = require('../utils/util');

async function findTwoNumber(){

    const input = await utils.readFile('./input.txt');

    for( let i =0; i< input.length; i++){
        const remainder = 2020 - parseInt(input[i]) ;
        if( input.indexOf(remainder.toString()) != -1 && input.indexOf(remainder.toString()) > i){
            console.log( input[i] * remainder)
        }
    }  
}  

findTwoNumber();