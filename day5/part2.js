const utils = require('../utils/util');


const seatNumber = getSeatNumber();
console.log(seatNumber);

function getSeatNumber() {

    const input = utils.readFile('./input.txt');

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

    const sortedSeatIDArr = seatIDArr.sort((a,b) => a-b);
    
    for( let i = sortedSeatIDArr[0]; i < maxSeatID; i++){
        if( !sortedSeatIDArr.includes(i) && sortedSeatIDArr.includes(i-1) && sortedSeatIDArr.includes(i+1)){
            return i;
        }
    }

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