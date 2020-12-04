const utils = require('../utils/util');


(async function checkForValidPasswords() {
    const input = await utils.readFile('./passwordInput.txt');

    let validPasswordCnt = 0 ;
    input.forEach((eachInput) => {
        const inputContent = eachInput.match(/(\d+)-(\d+)\s(\w):\s(.*?)$/);

        const firstPosition  = inputContent[1];
        const secPosition = inputContent[2];
        const letter      = inputContent[3];
        const password    = inputContent[4];
      
        const firstPosLetter = password[firstPosition - 1];
        const secPosLetter = password[secPosition - 1]

        let charCnt = 0;
        if( firstPosLetter === letter){
            charCnt += 1;
        }

        if( secPosLetter === letter){
            charCnt += 1;
        }

        if( charCnt === 1) {
            validPasswordCnt += 1
        }
        
    })
    console.log(validPasswordCnt);
    return validPasswordCnt;
})()


