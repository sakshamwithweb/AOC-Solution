# Answer: 1055
inputs = open("Day1/input.txt").read().split("\n")
sum = 50
zeroPoints = 0

for i in inputs:
    side = i[0]
    num = int(i[slice(1,len(i))])
    
    if side == "L":
        for n in range(num):
            sum -= 1
            if sum == -1:
                sum = 99
    else:
        for n in range(num):
            sum += 1
            if sum == 100:
                sum = 0
                
    if sum == 0:
        zeroPoints += 1

print(f"Password is {zeroPoints}")