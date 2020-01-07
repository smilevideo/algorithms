//Given a string, finds and return all permutations of that string in an array
//e.g. listPermutations('abc') will return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//maximum number of permutations (no duplicate characters) is n!, where n is string length

const listPermutations = (string) => {
    let ret = [];

    //function to create strings recursively, starting with n choices for the first character, n-1 for the second, etc.
    const recursiveFunc = (omittedString, remainingString) => {
        for (let i = 0; i < remainingString.length; i++) {
            let char = remainingString[i];

            //remove the current iteration character from the input remaining string to be used as the new remaining string in the next depth call
            let str = remainingString.slice(0, i) + remainingString.slice(i + 1, remainingString.length);

            //add the current iteration character to the input omitted string to be used as the new omitted string in the next depth call
            let newOmittedString = omittedString + char;

            //if recursion has reached maximum depth, push the constructed string to the array
            if (newOmittedString.length === string.length) {
                ret.push(newOmittedString);
            }
            recursiveFunc(newOmittedString, str);
        }
    }

    //call recursive function to build out the array
    recursiveFunc('', string);

    //remove duplicate strings in case the input string has duplicate characters
    ret = ret.filter((str, index, arr) => {
        return (arr.indexOf(str) === index);
    })

    return ret;
}

console.log(listPermutations('abcd'));
console.log(listPermutations('aba'));
console.log(listPermutations(''));
