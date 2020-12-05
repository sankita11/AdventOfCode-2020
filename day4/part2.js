const utils = require('../utils/util');


const validFields = {
    "byr" : {
        min : 1920,
        max : 2002
    }, 
    "iyr" : {
        min : 2010,
        max : 2020
    }, 
    "eyr": {
        min : 2020,
        max : 2030
    }, 
    "hgt" : {
        "cm" : {
            min: 150,
            max: 193
        },
        "in" : {
            min: 59,
            max: 76
        }
    }, 
    "hcl" : {
        "regex": new RegExp(/^#[0-9a-f]{6}$/)
    },
    "ecl": {
        val : ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
    }, 
    "pid": {
        len : 9
    }
}
const validPassport = checkForValidPassport();
console.log(validPassport);

function checkForValidPassport(){
    const input = utils.readFile('./input.txt');

    const parsedInput = parseInput(input);
    let validPassport = 0;
    parsedInput.forEach((eachInput) => {

        const isValid = isValidPassport( eachInput )
        if( isValid) validPassport ++;
    })

    return validPassport ; 
}

function isValidPassport( input ){
    if( !input["byr"] ||  parseInt(input["byr"]) > validFields["byr"]["max"] || parseInt(input["byr"]) < validFields["byr"]["min"]){
        return false
    }

    if( !input["iyr"] ||  parseInt(input["iyr"]) > validFields["iyr"]["max"] || parseInt(input["iyr"]) < validFields["iyr"]["min"]){
        return false
    }

    if( !input["eyr"] ||  parseInt(input["eyr"]) > validFields["eyr"]["max"] || parseInt(input["eyr"]) < validFields["eyr"]["min"]){
        return false
    }
    
    if( !input["hgt"] ) return false

    if( input["hgt"] ){
        const hgt = input["hgt"].match(/(\d+)(cm|in)/)
        if(!hgt) return false

        const measure = hgt[2];
        if( hgt[1] > validFields["hgt"][measure]["max"] || hgt[1] < validFields["hgt"][measure]["min"]) return false
    }

    if( !input["hcl"] ||  !input["hcl"].match(validFields["hcl"]["regex"])) return false

    if( !input["ecl"] || !validFields["ecl"]["val"].includes(input["ecl"])) return false

    if( !input["pid"] || isNaN(input["pid"]) || input["pid"].length != validFields["pid"]["len"]) return false

    return true;

}


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