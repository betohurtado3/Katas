export function addMultiples(number: number): number {
    var predilectNumbers = []
    var total = 0
    for (let index = 0; index < number; index++) {
        if(index%3 == 0 || index%5 == 0)
        {
            predilectNumbers.push(index)
        }
    }
    for(let i of predilectNumbers) total+=i;
    return total
}