const utils = require('../utils/util');


getSeatNumber();
async function getSeatNumber() {

    const input = await utils.readFile('./input.txt');

    let maxSeatID = 0 ;
    const seatIDArr = [];
    input.forEach((eachInput) => {

        const row = calculateRow(eachInput, 0, 8);
        const col = calculateCol(eachInput, 7, eachInput.length);

        const seatID = (row * 8) + col;
        if( seatID > maxSeatID){
            maxSeatID = seatID;
        }
        seatIDArr.push(seatID)

    });

    console.log( maxSeatID)

}

function calculateRow( input, minRowIndex, maxRowIndex ){

    let minRow = 0 ;
    let maxRow = 127;
    let midPointRow = 0 ; 

    for( let i = minRowIndex; i < maxRowIndex; i++){
        const char = input[i];

        if( char === 'F'){
            midPointRow = Math.floor((minRow + maxRow) / 2);
            maxRow = midPointRow
        }else if( char === 'B'){
            midPointRow = Math.ceil((minRow + maxRow) / 2);
            minRow = midPointRow
        }

    }

    return maxRow;

}

function calculateCol( input, minColIndex, maxColIndex){

    let minCol = 0 ;
    let maxCol = 7;
    let midPointCol = 0 ; 

    for( let i= minColIndex; i < maxColIndex; i++ ){
        const char = input[i];

        if( char === 'R'){
            midPointCol =  Math.ceil((minCol + maxCol) / 2);
            minCol = midPointCol
        }else if( char === 'L'){
            midPointCol =  Math.floor((minCol + maxCol) / 2);
            maxCol = midPointCol
        }        
        
    }

    return maxCol;

}