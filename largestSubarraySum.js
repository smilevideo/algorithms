//Given an array of integers, find the maximum sum from its subsequences

//brute force: time-complexity is O(n^3)...
// const largestSubarraySum = (arr) => {
//     const list = [];
//     arr.forEach((val, index) => {
//         for (let i = arr.length; i > index; i--) {
//             list.push(arr.slice(index, i));
//         }
//     });

//     console.log(list);

//     const sums = list.map((array) => {
//         return array.reduce((memo, num) => {
//             return memo + num;
//         })
//     });

//     console.log(sums);

//     return sums.reduce((memo, num) => {
//         return num > memo ? num : memo;
//     })
// }

//dynamic programming (DP) approach I read about online: time-complexity is O(n), space-complexity is O(1)
const largestSubarraySum = (arr) => {
    currentMax = arr[0]; //currentMax is the maximum of the subarrays that end at the current index
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentMax = arr[i] + (currentMax > 0 ? currentMax : 0)
        max = Math.max(max, currentMax);
    }

    return max;
}

console.log(largestSubarraySum([1,2,3,4,5,-10,6,3,-50]));
// returns 15
console.log(largestSubarraySum([1, -1, 5, 3, -7, 4, 5, 6, -100, 4]));
// returns 16 because the largest sequence spans index 2 to 7: [5, 3, -7, 4, 5, 6]