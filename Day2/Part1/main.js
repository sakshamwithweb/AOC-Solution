// Answer: 23701357374
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

            factors.forEach((factor) => {
                const strNum = i.toString() // Converting num to str to get indexes
                const firstHalf = strNum.slice(0, factor)
                const lastHalf = strNum.slice(factor, strNum.length)
                if (firstHalf == lastHalf) invalidNumbers.push(i)
            })
        }
    })
    console.log(`The sum of all Invalid Numbers is ${invalidNumbers.reduce((prev, num) => prev + num, 0)}`)
})()