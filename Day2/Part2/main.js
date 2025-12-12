// Answer: 34284458938
import fs from "fs"

/**
 * Takes url of input and outputs an array containing all inputs
 * @param url Relative Path/URL of input 
 * @returns 
 */
const getInput = async (url) => {
    const data = fs.readFileSync(url, { encoding: 'utf8', flag: 'r' })
    return data.split(",")
}

const findFactors = (num) => {
    let factors = []
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }
    return factors
}


(async () => {
    const input = await getInput("Day2/input.txt")
    const invalidNumbers = []

    input.forEach((range) => {
        const [from, to] = [Number(range.split("-")[0]), Number(range.split("-")[1])]
        for (let i = from; i <= to; i++) {
            // Find length of number and factors of length then one by one, try to divide and check are they same if yes so good or else next pls..
            const length = i.toString().length
            const factors = findFactors(length)
            factors.every((factor) => {
                const strNum = i.toString() // Converting num to str to get indexes
                let splittedNos = strNum.match(new RegExp(`.{1,${factor}}`, 'g')) // Split the string into factor'th and try to match all.
                const areAllValSame = splittedNos.every((val, ind, arr) => {
                    if (ind != (arr.length - 1)) return val == arr[ind + 1]
                    else return true
                })
                if (areAllValSame) {
                    invalidNumbers.push(i)
                    return false // To break the factors.every
                }
                return true // to continue factors.every
            })
        }
    })
    console.log(`The sum of all Invalid Numbers is ${invalidNumbers.reduce((prev, num) => prev + num, 0)}`)
})()