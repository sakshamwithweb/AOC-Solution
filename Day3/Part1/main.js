// Answer = 17179
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

const findLargest = (arr) => {
    let largest = 0
    arr.forEach((val) => {
        if (val > largest) {
            largest = val
        }
    })
    return largest
}

(async () => {
    const batteries = await getInput("Day3/input.txt")
    const largeNumbers = batteries.map((strBattery) => { // strBattery = Each Battery
        // try out all possibilities and find the biggest one..
        const batteryArr = strBattery.split("").map((v) => parseInt(v)) // [5,4,9,1,8,9...]

        const possibilities = batteryArr.map((battery, index) => { // Each numbers
            const possibilities = batteryArr.map((b, i) => {
                if (index < i) return parseInt(`${battery}${b}`) // to follow order
                else return 0 // if it is number itself
            })
            return findLargest(possibilities)
        })
        return findLargest(possibilities)
    })
    console.log(largeNumbers.reduce((prev, a) => prev + a, 0))
})()