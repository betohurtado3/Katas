def solution(s):
    l = list(s)
    array = []
    if len(l) % 2 != 0:
        l.append("_")

    for item in range(0, len(l), 2):
        array.append(l[item] + l[item+1])

    return array


print(solution('asdfadsf'))
