//Referred https://www.reddit.com/r/adventofcode/comments/ka8z8x/2020_day_10_solutions/gfa7mmg/?context=8&depth=9 for the solution


const util = require('../utils/util');

const cnt = findConbimations()
console.log(cnt)

function findConbimations() {

    const input = util.readFile('input.txt');

    //Convert each input from string to integer and sort the array in ascending order
    const typedInput = input.map( eachInput => parseInt(eachInput)).sort((a,b) => a - b);

    typedInput.unshift(0)

    const routes = {}
    routes[0] = 1
    for( let j of typedInput ){
        if(j == 0){
            continue
        }
        const r1 = routes[j-1] || 0
        const r2 = routes[j-2] || 0;
        const r3 = routes[j-3] || 0
        routes[j] = r1 + r2 + r3 
    }
    const routeKeys = Object.keys(routes).sort((a,b) => a - b)
    
    return routes[routeKeys[routeKeys.length - 1]]

}

