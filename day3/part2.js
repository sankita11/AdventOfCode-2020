const utils = require('../utils/util');

(async function  countTrees() {

    const variants = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ]


    const input = await utils.readFile('./input.txt');

    let lineLen = input[0].length
    let product = 1; 
    for( let v=0; v < variants.length; v++){

        const right = variants[v][0];
        const down = variants[v][1];
    
        treesCnt = 0;
        let currentPosition = 0;
        for( let i = 0; i < input.length; i ++) {

            if (i % down > 0 )
                continue;
              
            let line = input[i];
            if( i > 0 ){
                if(line[currentPosition] === '#' )
                treesCnt ++ ;  
            }
            
            currentPosition += right;
            if( currentPosition >= lineLen )
                currentPosition = currentPosition - lineLen;
            
        }

        product = product * treesCnt
    
    }
    console.log(product);
})()

