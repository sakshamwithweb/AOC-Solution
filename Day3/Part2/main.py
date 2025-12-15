# Answer: 170025781683941

def find_largest_numbers_of_bank(strBank, n):
    def find_largest(list):
        largest = {"value": -1, "index": -1}
        for index, val in enumerate(list):
            if largest["value"] < val:
                largest = {"value": val, "index": index}
        return [largest["value"], largest["index"]]

    battery_list = list(map(int, list(strBank)))  # [1, 2, 3, 4, 5]
    biggest_number = []

    for i in range(n):
        remain = n - i - 1
        search_limit = len(battery_list) - remain
        largest, largest_index = find_largest(battery_list[0:search_limit])

        biggest_number.append(largest)
        battery_list = battery_list[largest_index + 1:]

    return int("".join(list(map(str, biggest_number))))


banks = open("Day3/input.txt").read().split("\n")
largest_numbers_of_bank = [find_largest_numbers_of_bank(bank, 12) for bank in banks]
print(sum(largest_numbers_of_bank))
