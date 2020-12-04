const utils = require('../utils/util');


(async function  countTrees() {

    const input = await utils.readFile('./input.txt');

    let currentPosition = 0;
    let lineLen = input[0].length
    treesCnt = 0;
    for( let i = 0; i < input.length; i ++) {

        let line = input[i];
        if( i > 0){
            if(line[currentPosition] === '#' )
                treesCnt ++ ;
        }
        
        currentPosition += 3;
        if( currentPosition >= lineLen )
            currentPosition = currentPosition - lineLen;     
    }
    console.log(treesCnt);
})()
