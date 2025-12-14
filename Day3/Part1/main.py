# Answer: 17179
batteries = open("Day3/input.txt").read().split("\n")

def find_large_numbers(strBattery):
    def find_largest(list):
        largest = 0
        for val in list:
            if val > largest:
                largest = val
        return largest

    battery_list = list(map(int, list(strBattery)))
    possibilities = []

    for index, battery in enumerate(battery_list):
        each_possibilities = []
        for i, b in enumerate(battery_list):
            each_possibilities.append(int(f"{battery}{b}") if index < i else 0)
        possibilities.append(find_largest(each_possibilities))
    return find_largest(possibilities)


largeNumbers = list(map(find_large_numbers, batteries))
print(sum(largeNumbers))
