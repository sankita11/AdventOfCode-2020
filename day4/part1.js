const utils = require('../utils/util');


(async function checkForValidPassport(){
    const input = await utils.readFile('./input.txt');

    const validFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"] 

    const parsedInput = parseInput(input);
    let validPassport = 0;
    parsedInput.forEach((eachInput) => {
        for(let i = 0; i < validFields.length; i++){
            if(!eachInput[validFields[i]]){
                return false;
            }
        }
        validPassport ++;
    })

    console.log(validPassport);

    
})()

function parseInput(input) {
    let passportStr = '';
    const passportArr =[]
    input.forEach( (eachInput) => {
        if( eachInput !== ''){
            passportStr += eachInput + ' '
        }else{         
            passportArr.push(parseSingleInput(passportStr))
            passportStr = ''
        }
    })

    if( passportStr){
        passportArr.push(parseSingleInput(passportStr))
        passportStr = ''
    }
    return passportArr;
}

function parseSingleInput(passportStr) {

    const fields = passportStr.trim().split(' ')
    const fieldMap = {};
    fields.forEach((eachField) => {
       const field = eachField.split(":");
        fieldMap[field[0]] = field[1];
    })
    return fieldMap;
}