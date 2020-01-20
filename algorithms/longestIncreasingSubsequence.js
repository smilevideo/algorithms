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
    const dp = []; //array to hold indexes pointing to the last element in the subsequence of length j
    const pre = []; //array to hold indexes pointing to the previous number in the subsequence ending at i
    let max = 0; //holds the maximum length out of the subsequences encountered

    for (let i = 0; i < arr.length; i++) {
        //binary search for the smallest value of arr[dp[j]] that is greater than arr[i]
        // possible because arr[dp[j]] maintains a strictly increasing sequence
        let start = 1;
        let end = max;
        let mid = 0;
        while (start <= end) {
            mid = Math.ceil((start + end) / 2);
    
            if (arr[i] < arr[dp[mid]]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        
        //replace the ending element in the subsequence of length j tracked by dp[j] with the current element
        dp[start] = i; 
        //the preceding element in the subsequence ending at index i will be the ending index of the subsequence with length j-1
        pre[i] = dp[start - 1];

        max = Math.max(max, start);
    }

    //recreate the longest subsequence using pre
    const ret = [];
    let k = dp[max];
    for (let i = max - 1; i >= 0; i--) {
        ret[i] = arr[k];
        k = pre[k]
    }

    return ret;
}

module.exports = {
    LIS: longestIS
}