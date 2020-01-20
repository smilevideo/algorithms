//Find the longest increasing subsequence in an array of n numbers
// Note that a subsequence does not have to be contiguous

/* O(n**2) solution: */
// const longestIS = (arr) => {
//     let max = 0;
//     const dp = []; //length is the array of maximum lengths of subsequences ending at the corresponding indexes

//     //dynamic programming: look for  a position j < i for which arr[j] < arr[i] and dp[i] is as large as possible so that 
//     // dp[i] = dp[j] + 1 or just 1 if there is no such j
//     for (let i = 0; i < arr.length; i++) {
//         dp[i] = 1;

//         for (let j = 0; j < i; j++) {
//             if (arr[j] < arr[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
        
//         max = Math.max(max, dp[i]);
//     }

//     return max;
// }

/* O(n log n) solution */
const longestIS = (arr) => {
    const dp = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 0;
    }
}

console.log(longestIS([6, 2, 5, 1, 7, 4, 8, 3]));
//should return 4 because [2, 5, 7, 8] is the longest increasing subsequence