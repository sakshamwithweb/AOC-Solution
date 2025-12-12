# Answer: 34284458938
from textwrap import wrap

def find_factor(num):
    f = [] # factors
    for i in range(1, num):
        if num % i == 0:
            f.append(i)
    return f

inputs = open("Day2/input.txt").read().split(",")
invalid_numbers = []

for r in inputs:
    from_range, to_range = [int(r.split("-")[0]),int(r.split("-")[1])]
    for i in range(from_range, to_range+1):
        length = len(str(i))
        factors = find_factor(length)
        for factor in factors:
            str_num = str(i)
            splitted_nos = wrap(str_num, factor)
            are_all_val_same = True
            for index, nos in enumerate(splitted_nos):
                if(index != len(splitted_nos)-1):
                    if nos != splitted_nos[index+1]:
                        are_all_val_same = False
            if(are_all_val_same):
                invalid_numbers.append(i)
                break

print(f'The sum of all Invalid Numbers is {sum(invalid_numbers)}')