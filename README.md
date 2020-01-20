# Algorithms
JavaScript solutions I've written for algorithm problems, probably only for my own reference


## Current list
| Algorithm | Problem | Notes | Time-complexity | Space-complexity |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| [Binary Search](https://github.com/smilevideo/algorithms/blob/master/algorithms/binarySearch.js) | Given an array of numbers sorted in increasing order, find a number. | <ul><li>[Some tests](https://github.com/smilevideo/algorithms/blob/master/tests/binarySearch.test.js)</li><li>This specific implementation uses `Math.floor` and returns `null` if the number isn't found.</li></ul> | O(nlogn) | O(1) |
| [Counting Sort](https://github.com/smilevideo/algorithms/blob/master/algorithms/countingSort.js) | Sort an array that consists only of non-negative integers. | <ul><li>Should probably only be used when k is less than n, so that O(n+k) reduces to O(n)</li></ul> | O(n+k), where k is the largest integer in the array | O(n+k) |
| [String Permutations](https://github.com/smilevideo/algorithms/blob/master/algorithms/stringPermutations.js) | Given a string, list all unique permutations of it in an array. || O(n!) | O(n!) |
| [Balanced Brackets](https://github.com/smilevideo/algorithms/blob/master/algorithms/balancedBrackets.js) | Given a string of opening and closing brackets, determine whether it is balanced. || O(n) | O(n) |
| [Largest Subsequence Sum](https://github.com/smilevideo/algorithms/blob/master/algorithms/largestSubarraySum.js) | Given an array of numbers, find the maximum sum of a subsequence of the array. | <ul><li>Dynamic programming</li><li>Includes the brute-force solution that I initially wrote at the beginning, commented-out.</li></ul> | O(n) | O(1) | 
| [Longest Substring Length](https://github.com/smilevideo/algorithms/blob/master/algorithms/lengthOfLongestSubstring.js) | Given a string, find the length of the longest substring (i.e. contiguous subsequence) without repeating characters. | <ul><li>Dynamic programming</li><li>Problem is Leetcode #3</li></ul> | O(n) | O(n) |
| [Generate Subsets](https://github.com/smilevideo/algorithms/blob/master/algorithms/generateSubsets.js) | Given a non-negative integer n, generate all subsets of the set \[0, 1, ..., n-1\]. | <ul><li>Using a binary representation of integers approach, which is cool, but not sure if it's optimal.</li></ul> | O(2<sup>n</sup> logn), because the conversion to binary and the length of the resultant binary string are both O(logn) | O(2<sup>n</sup> logn) |
| [Longest Increasing Subsequence](https://github.com/smilevideo/algorithms/blob/master/algorithms/longestIncreasingSubsequence.js) | Find the longest increasing subsequence in an array of n numbers. Note that a subsequence does not have to be contiguous. | <ul><li>[Some tests](https://github.com/smilevideo/algorithms/blob/master/tests/LIS.test.js)</li><li>Dynamic programming combined with a binary search</li><li>Took me quite a while to understand and recreate the O(nlogn) solution for this. Will probably write a blog post or something about it later.</li><li>File includes a simpler, commented-out O(n<sup>2</sup>) dynamic programming solution at the beginning.</li></ul> | O(nlogn) | O(n) |


## Testing
Unit testing with jest:
```
npm install
npm run test
```
