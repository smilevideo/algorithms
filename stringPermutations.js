//given a string made up of unique characters, find and return all permutations of that string in an array
//e.g. findPermutations('abcd') should return 
// ['abcd', 'abdc', 'acbd', 'acdb', 'adcb', 'adbc', 'bacd', ...etc]
// number of permutations is n!, where n is string length
//can assume the string does not have duplicate characters for this problem

const findPermutations = (string) => {
    let ret = [];

    const recursiveFunc = (omittedString, remainingString) => {
        for (let i = 0; i < remainingString.length; i++) {
            let char = remainingString[i];
            let str = remainingString.slice(0, i) + remainingString.slice(i + 1, remainingString.length);
            let newOmittedString = omittedString + char;
            ret.push(newOmittedString);
            recursiveFunc(newOmittedString, str);
        }
    }

    recursiveFunc('', string);

    console.log(ret);
    ret = ret.filter((str) => {
        return str.length === string.length;
    })

    return ret;
}

console.log(findPermutations('abcd'));
