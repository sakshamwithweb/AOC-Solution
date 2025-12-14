# Answer: 17179

def find_largest_numbers_of_bank(strBank):
    def find_largest(list):
        largest = 0
        for val in list:
            if val > largest:
                largest = val
        return largest

    battery_list = list(map(int, list(strBank)))
    possibilities = []

    for index, battery in enumerate(battery_list):
        each_possibilities = []
        for i, b in enumerate(battery_list):
            each_possibilities.append(int(f"{battery}{b}") if index < i else 0)
        possibilities.append(find_largest(each_possibilities))
    return find_largest(possibilities)


banks = open("Day3/input.txt").read().split("\n")
largest_numbers_of_bank = list(map(find_largest_numbers_of_bank, banks))
print(sum(largest_numbers_of_bank))
