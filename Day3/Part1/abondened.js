// Answer > 16209
// I was trying to get 2 largest number and arrange them in order but suppose I found 9 and 8 and if keep in order so it is 89 but the largest was 92..
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

const largestElement = (arr, ind) => {
    let largest = { value: -1, index: -1 };
    arr.forEach((val, i) => {
        if (ind == undefined) { // Avoid ind
            if (val > largest.value) largest = { value: val, index: i }
        } else {
            if (i != ind && val > largest.value) largest = { value: val, index: i }
        }
    })
    return [largest.value, largest.index]
}

(async () => {
    const batteries = await getInput("Day3/input.txt")
    let nos = []
    batteries.forEach((battery) => {
        // Find 2 biggest numbers and just join according to the direction!
        const batteryArr = battery.split("").map((v) => parseInt(v))

        const [largestVal, largestValIndex] = largestElement(batteryArr)
        const [secondLargestVal, secondLargestValIndex] = largestElement(batteryArr, largestValIndex)

        let no;

        if (largestValIndex < secondLargestValIndex) no = `${largestVal}${secondLargestVal}`
        else if (largestValIndex > secondLargestValIndex) no = `${secondLargestVal}${largestVal}`
        else console.log("Fatal")
        console.log(no)

        nos.push(parseInt(no))
    })
    console.log(nos.reduce((prev, a) => a + prev, 0))
    // console.log(nos)
})()