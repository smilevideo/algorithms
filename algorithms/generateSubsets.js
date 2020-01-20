//given a non-negative integer n, generate all subsets of the set [0, 1, ..., n-1]

//time-complexity: O(2**n logn), because the conversion to binary and the length of the resultant binary string are both O(logn)
//space-complexity: O(2**n logn), for essentially the same reasons given for the time-complexity
const generateSubsets = (n) => {
    const ret = [];
    
    for (let i = 0; i < 2**n; i++) { //2**n - 1 is the decimal representation of the binary number that will generate the largest set
        const binary = i.toString(2);
        const arr = [];

        for (let j = binary.length - 1; j >= 0; j--) {
            if (binary[j] === '1') {
                arr.push(binary.length - 1 - j);
            }
        }

        ret.push(arr);
    }

    return ret;
}

console.log(generateSubsets(5));
