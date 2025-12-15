// Answer = 170025781683941
// This is also working!

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
    let largest = { value: -1, index: -1 }
    arr.map((no, index) => {
        if (largest.value < no) largest = { value: no, index: index }
    })
    return [largest.value, largest.index]
}

const findBiggestOrder = (arr, n) => {
    /** Find Biggest in order number
     * Choose n numbers from last (delete those n number from original list as no need)
     * Now start from front
     * look for biggest possible value than what you have or else stop here (if found so trim all value before that new number (even that no) and replace the no with new one)
     * do same things for rest
     */
    let originalArr = arr.slice()
    let biggestNumbers = arr.slice(originalArr.length - n)
    originalArr = originalArr.slice(0, originalArr.length - n)
    // console.log(originalArr)
    biggestNumbers.forEach((number, index) => {
        const [largest, largestIndex] = findLargest(originalArr)
        if (largest >= number) {
            // replace the smaller value with new largest one and in originalArr, add the prev value at last
            biggestNumbers[index] = largest
            originalArr.push(number)

            originalArr = originalArr.slice(largestIndex + 1) // trim the before value including the largest number
        } else {
            originalArr = [] // if there is no largest so trim out all values as current is largest and perfect.
        }
    })
    return biggestNumbers
}

(async () => {
    const banks = await getInput("Day3/input.txt")
    const largestNumbersOfBanks = banks.map((strBank) => { // strBattery = Each Battery
        // try out all possibilities and find the biggest one..
        const batteryArr = strBank.split("").map((v) => parseInt(v)) // [5,4,9,1,8,9...]

        return parseInt(findBiggestOrder(batteryArr, 12).join(""))
    })
    console.log(largestNumbersOfBanks.reduce((prev, a) => prev + a, 0))
})()
