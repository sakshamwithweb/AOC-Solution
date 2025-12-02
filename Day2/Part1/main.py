# Answer: 23701357374

def findFactor(num):
    factors = []
    for i in range(1, num):
        if num % i == 0:
            factors.append(i)

    return factors

inputs = open("Day2/input.txt").read().split(",")
invalidNumbers = []

for r in inputs: # r for range
    start, end = [int(r.split("-")[0]), int(r.split("-")[1])]
    for i in range(start, end + 1):
        # Find length of number and factors of length then one by one, try to divide and check are they same if yes so good or else next pls..
        length = len(str(i))
        factors = findFactor(length)
        for factor in factors:
            strName = str(i) # to get indexes
            firstHalf = strName[slice(0, factor)]
            lastHalf = strName[slice(factor, len(strName))]
            if firstHalf == lastHalf:
                invalidNumbers.append(i)
                
print(f"The sum of all Invalid Numbers is {sum(invalidNumbers)}")