// import ms from "ms";
import { log } from "console";
import fs from "fs";
import ms from "ms";

aboutTime()

function aboutTime() {
    fs.readFile('timestamps.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')
        console.log(contents)
        const timeStampsArray = contents.split('\n').map(Number)
        console.log('timeStampsArray', timeStampsArray)

        console.log('\n', 'regular math');
        timeStampsArray.forEach(element => {
            console.log(element / 1000 + 'seconds')
        });
        // })
        console.log('\n', 'ms package');
        timeStampsArray.forEach(element => {
            console.log(ms(element) + 'seconds')
        });
    })
    console.log('after calling readFile')
}


//take text and for each the array