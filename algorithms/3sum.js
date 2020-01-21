//Given an array of numbers, find three array values whose sum is x

//two-pointer approach, O(n**2) time
const threeSum2p = (arr, target) => {
    //js .sort() uses quicksort, which is O(nlogn)
    const sorted = arr.sort((a, b) => {
        return a - b;
    });

    //
    for (let i = 0; i < arr.length - 1; i++) { 
        let a = arr[i];
        let start = i + 1;
        let end = arr.length - 1;

        while (start < end) {
            let b = arr[start];
            let c = arr[end];

            if (a + b + c === target) {
                return [a, b, c];
            }
            else if (a + b + c < target) {
                start += 1;
            }
            else {
                end -= 1;
            }
        }
    }

    return null;
}

//hashing approach, doesn't need to sort, also O(n**2) time
const threeSumHash = (arr, target) => {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = i;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const check = target - arr[i] - arr[j]; // value that satisfies sum check
            if (hash[check] && hash[check] !== i && hash[check] !== j) {
                return [arr[i], arr[j], check];
            }
        }
    }

    return null;
}

module.exports = {
    threeSum2p: threeSum2p,
    threeSumHash: threeSumHash
};