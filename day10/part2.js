const util = require('../utils/util');

const cnt = findConbimations()
console.log(cnt)

function findConbimations() {

    const input = util.readFile('input.txt');

    //Convert each input from string to integer and sort the array in ascending order
    const typedInput = input.map( eachInput => parseInt(eachInput)).sort((a,b) => a - b);

    //Find ranges with difference 1
    const ranges = get_joltage_ranges(typedInput)

    //Find combination in each range 
    let combinationCnt = 1
    ranges.forEach((eachRange) => {
        combinationCnt *= fibonacci(eachRange.length - 1)
    })
    
    return combinationCnt

}

function get_joltage_ranges(joltages){
    delta = 0
    prev_joltage = 0
    joltages_in_range = []
    joltage_range = []

    for(joltage of joltages){
        delta = joltage - prev_joltage
        if(delta == 1)
            joltage_range.push(prev_joltage)
        else if( delta == 3){
            joltage_range.push(prev_joltage)
            joltages_in_range.push(joltage_range)
            joltage_range = []
        }
        prev_joltage = joltage

    }
    if( delta == 1){
        joltage_range.push(prev_joltage)
        joltages_in_range.push(joltage_range)

    }

    return joltages_in_range

}

function fibonacci(n){
    first = 0
    second = 0
    third = 1

    for( i = 0; i < n; i++){
        next_value = first + second + third
        first = second
        second = third
        third = next_value
    }   

    return third

}