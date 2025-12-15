// Answer = 170025781683941
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
    let originalArr = arr.slice()
    let biggestNumber = []
    // console.log(originalArr)

    for (let i = 0; i < n; i++) {
        const remain = n - i - 1 // n-i-1(11) to 0
        const searchLimit = originalArr.length - remain
        const [largest, largestIndex] = findLargest(originalArr.slice(0, searchLimit))

        biggestNumber.push(largest)
        originalArr = originalArr.slice(largestIndex + 1)
    }
    return parseInt(biggestNumber.join(""))
}

(async () => {
    const banks = await getInput("Day3/input.txt")
    const largestNumbersOfBanks = banks.map((strBank) => { // strBattery = Each Battery
        const batteryArr = strBank.split("").map((v) => parseInt(v)) // [5,4,9,1,8,9...]

        return findBiggestOrder(batteryArr, 12)
    })
    console.log(largestNumbersOfBanks.reduce((prev, a) => prev + a, 0))
})()