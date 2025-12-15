# Answer: 170025781683941
# This is also working!

def find_largest_numbers_of_bank(strBank, n):
    def find_largest(list):
        largest = {"value": -1, "index": -1}
        for index, val in enumerate(list):
            if largest["value"] < val:
                largest = {"value": val, "index": index}
        return [largest["value"], largest["index"]]

    battery_list = list(map(int, list(strBank)))  # [1, 2, 3, 4, 5]
    biggest_number = battery_list[len(battery_list) - n:]
    # Triming biggest_number values(last)
    battery_list = battery_list[0:len(battery_list) - n:]

    for index, number in enumerate(biggest_number):
        largest, largest_index = find_largest(battery_list)
        if (largest >= number):
            # replace the smaller value with new largest one and in battery_list, add the prev value at last
            biggest_number[index] = largest
            battery_list.append(number)

            battery_list = battery_list[largest_index+1:]
        else:
            battery_list = []
    
    return int("".join(list(map(str, biggest_number))))


banks = open("Day3/input.txt").read().split("\n")
largest_numbers_of_bank = [
    find_largest_numbers_of_bank(bank, 12) for bank in banks]
print(sum(largest_numbers_of_bank))