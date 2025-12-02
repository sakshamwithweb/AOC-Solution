// Answer: 6386
import fs from "fs"

/**
 * Takes url of input and outputs an array containing all inputs
 * @param url Relative Path/URL of input 
 * @returns 
 */
const getInput = async (url) => {
    const data = fs.readFileSync(url, { encoding: 'utf8', flag: 'r' })
    return data.split("\n")
}


(async () => {
    const input = await getInput("Day1/input.txt")
    let sum = 50;
    let zeroPoints = 0;
    input.forEach((i) => {
        const side = i[0] // L or R
        const num = Number(i.slice(1))

        if (side == "L") {
            for (let i = 1; i <= num; i++) {
                // Since it is subtracting, it will be always 0 then 99
                sum -= 1
                if (sum == 0 && i != num) zeroPoints++ // It is added in Part2----------------------------------
                if (sum == -1) sum = 99;
            }
        } else {
            for (let i = 1; i <= num; i++) {
                // Since it is adding, it will be always 99 then 0
                sum += 1
                if (sum == 100 && i != num) zeroPoints++ // It is added in Part2----------------------------------
                if (sum == 100) sum = 0;
            }
        }
        if (sum == 0) zeroPoints++
    })
    console.log(`Password is ${zeroPoints}`)
})()