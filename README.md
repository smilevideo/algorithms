# Algorithms
JavaScript solutions I've written for algorithm problems, probably only for my own reference.  
Many of these were prompted during my read-through of the [Competitive Programmer's Handbook](https://cses.fi/book/book.pdf), while others were seen on Leetcode/elsewhere.


## Current list
| Algorithm | Problem | Notes | Time-complexity | Space-complexity |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| [Binary Search](https://github.com/smilevideo/algorithms/blob/master/algorithms/binarySearch.js) | Given an array of numbers sorted in increasing order, look for a specific number. | <ul><li>[Some tests](https://github.com/smilevideo/algorithms/blob/master/tests/binarySearch.test.js)</li><li>This specific implementation uses `Math.floor` and returns `null` if the number isn't found.</li></ul> | O(n logn) | O(1) |
| [Counting Sort](https://github.com/smilevideo/algorithms/blob/master/algorithms/countingSort.js) | Sort an array that consists only of non-negative integers. | <ul><li>Should probably only be used when k is less than or equal to n, so that O(n+k) reduces to O(n)</li><li>Also includes a slower approach that doesn't use hashing commented-out at the beginning.</li><li>Includes node benchmarking code at the end.</li></ul> | O(n+k), where k is the largest integer in the array | O(n+k) |
| [String Permutations](https://github.com/smilevideo/algorithms/blob/master/algorithms/stringPermutations.js) | Given a string, list its permutations. || O(n!) | O(n!) |
| [Balanced Brackets](https://github.com/smilevideo/algorithms/blob/master/algorithms/balancedBrackets.js) | Given a string of opening and closing brackets, determine whether it is balanced. || O(n) | O(n) |
| [Largest Subsequence Sum](https://github.com/smilevideo/algorithms/blob/master/algorithms/largestSubarraySum.js) | Given an array of numbers, find the maximum sum of a subsequence of the array. | <ul><li>Dynamic programming</li><li>Includes the brute-force solution that I initially wrote at the beginning, commented-out.</li></ul> | O(n) | O(1) | 
| [Longest Substring Length](https://github.com/smilevideo/algorithms/blob/master/algorithms/lengthOfLongestSubstring.js) | Given a string, find the length of the longest substring (i.e. contiguous subsequence) without repeating characters. | <ul><li>Dynamic programming</li><li>Problem is Leetcode #3</li></ul> | O(n) | O(n) |
| [Generate Subsets](https://github.com/smilevideo/algorithms/blob/master/algorithms/generateSubsets.js) | Given a non-negative integer n, generate all subsets of the set \[0, 1, ..., n-1\]. | <ul><li>Using a binary representation of integers approach, which is cool, but not sure if it's optimal.</li></ul> | O(2<sup>n</sup> logn), because the conversion to binary and the length of the resultant binary string are both O(logn) | O(2<sup>n</sup> logn) |
| [Longest Increasing Subsequence](https://github.com/smilevideo/algorithms/blob/master/algorithms/longestIncreasingSubsequence.js) | Find the longest increasing subsequence in an array of numbers. Note that a subsequence does not have to be contiguous. | <ul><li>[Some tests](https://github.com/smilevideo/algorithms/blob/master/tests/LIS.test.js)</li><li>Dynamic programming combined with a binary search</li><li>Took me quite a while to understand and recreate the O(n logn) solution for this. Will probably write a blog post or something about it later.</li><li>Includes a simpler, commented-out O(n<sup>2</sup>) dynamic programming solution at the beginning.</li></ul> | O(n logn) | O(n) |
| [3Sum](https://github.com/smilevideo/algorithms/blob/master/algorithms/3sum.js) | Given an array of numbers, find three distinct array values whose sum is x. | <ul><li>Two different approaches with the same space and time complexities:</li><li>First algorithm: Two-pointer approach</li><li>Second algorithm: Hashing approach. Has the advantage of not needing to sort the array beforehand, but hashing may not be available if using a real RAM model of computing.</li></ul> | O(n<sup>2</sup>) | O(n) |


## Testing
Unit testing with jest:
```
npm install
npm run test
```
