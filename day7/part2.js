const utils = require('../utils/util')

const bagCnt = getBags()
console.log(bagCnt);

function getBags(){

    const input = utils.readFile('./input.txt')

    const bagMap = {};
    input.forEach((eachInput) => {

        const bags = eachInput.match(/(.*?)bags contain(.*?)$/)
        const outerBag = bags[1].trim();
        bagMap[outerBag] = {};
        const innerBagRegex = /(\d+)(.*?)(?:bag|bags)/g

        let match= ''
        while(match = innerBagRegex.exec(bags[2])){
            const innerBag = match[2].trim()
            bagMap[outerBag][innerBag] = parseInt(match[1].trim());
        }
    })
     
    return findParentBag(bagMap, ["shiny gold"]);

}


function findParentBag( bagMap, outerBag){

    let bagCnt = 0;
    while( outerBag.length > 0){
        const bag = outerBag.shift()

        const innerBag = bagMap[bag];

        for( let key in innerBag){
            bagCnt += innerBag[key];
            for( let i=0; i< innerBag[key]; i++){
                outerBag.push(key)
            }
        }

    }
    return bagCnt;
    
}



