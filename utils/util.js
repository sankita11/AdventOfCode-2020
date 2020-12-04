const fs                  = require('fs');
const readline            = require('readline');

function readFile(file) {

    return new Promise((resolve, reject) => {

        const stream = fs.createReadStream(file);

        stream.on('error', reject);

        const reader = readline.createInterface({
            input: stream
        });

        const array = [];

        reader.on('line', line => {

            try {
                array.push(line);
            } catch (error) {
                console.log("Error parsing file" + error);
                reject("Error");
            }
           
        });

        reader.on('close', () => resolve(array));
    });
}

module.exports = { readFile }