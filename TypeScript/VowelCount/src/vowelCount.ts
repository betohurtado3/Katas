export function getCount(str: string): number {
    const vowels = ['a','e','i','o','u']
    var count=0
    /*for (let index = 0; index < str.length; index++) {
        if(vowels.includes(str[index]))
            count++
    }*/

    /*for (let index = 0; index < str.length; index++) {
        if (vowels.indexOf(str[index]) == 0) {
            count++
        }
    }*/

    for (let index = 0; index < str.length; index++) {
        if (str[index]== 'a' ||  str[index]== 'e' || str[index]== 'i' || str[index]== 'o' || str[index]== 'u') 
            count = count+1
    }
    return count;
}