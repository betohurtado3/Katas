def count_bits(number):
    ones = []
    for i in bin(number):
        if(i == '1'):
            ones.append(1)
    return len(ones)


print(count_bits(7))
