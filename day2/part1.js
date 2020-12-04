const utils = require('../utils/util');

(async function checkForValidPasswords() {
    const input = await utils.readFile('./passwordInput.txt');

    let validPasswordCnt = 0 ;
    input.forEach((eachInput) => {
        const inputContent = eachInput.match(/(\d+)-(\d+)\s(\w):\s(.*?)$/);

        const lowerLimit  = inputContent[1];
        const higherLimit = inputContent[2];
        const letter      = inputContent[3];
        const password    = inputContent[4];

        const re = new RegExp(letter,"g");
        const isValid = password.match(re)
        let charCount = isValid ? isValid.length : 0;

        if( charCount >= lowerLimit && charCount <= higherLimit) {
            validPasswordCnt += 1
        }
        
    });

    console.log(validPasswordCnt);
    return validPasswordCnt
})()
