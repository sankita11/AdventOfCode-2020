const utils = require('../utils/util')

const bagsCnt = getBags()
console.log(bagsCnt)

function getBags(){

    const input = utils.readFile('./input.txt')

    const bagMap = {};
    const directBags= [];
    input.forEach((eachInput) => {

        const bags = eachInput.match(/(.*?)bags contain(.*?)$/)
        const outerBag = bags[1].trim();
        bagMap[outerBag] = {};
        const innerBagRegex = /(?:\d+)(.*?)(?:bag|bags)/g

        let match= ''
        while(match = innerBagRegex.exec(bags[2])){
            const innerBag = match[1].trim()
            bagMap[outerBag][innerBag] = 1;
        }
    })

    return findParentBag(bagMap, ["shiny gold"]);
}

function findParentBag( bagMap, innerBag){
    let parentBagsArr = [];
    while( innerBag.length > 0){
        const bag = innerBag.shift()

        Object.keys(bagMap).forEach((eachBag) => {
            if(bagMap[eachBag][bag]) { 
                if( !parentBagsArr.includes(eachBag))
                    parentBagsArr.push(eachBag)
                innerBag.push(eachBag)
            }
        })
    }

    return parentBagsArr.length

}