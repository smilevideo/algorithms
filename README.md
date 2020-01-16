# Algorithms
JavaScript solutions I've written for algorithm problems, probably only for my own reference


## Current list:
- [String Permutations](https://github.com/smilevideo/algorithms/blob/master/stringPermutations.js): Given a string, list all unique permutations of it in an array.  
Time-complexity: O(n!)
- [Balanced Brackets](https://github.com/smilevideo/algorithms/blob/master/balancedBrackets.js): Given a string of opening and closing brackets, determine whether it is balanced.  
Time-complexity: O(n)
- [Largest Subsequence Sum](https://github.com/smilevideo/algorithms/blob/master/largestSubarraySum.js): Given an array of numbers, find the maximum sum of a subsequence of the array.  
I wrote a brute force algo and then looked online to write an optimal dynamic programming algo.  
Time-complexity: O(n)  
Space-complexity: O(1)
- [Longest Subarray Length](https://github.com/smilevideo/algorithms/blob/master/lengthOfLongestSubstring.js): From Leetcode #3: Given a string, find the length of the longest substring (i.e. continuous subsequence) without repeating characters.  
Time-complexity: O(n)  
Space-complexity: O(n)
- [Counting Sort](https://github.com/smilevideo/algorithms/blob/master/countingSort.js): Potentially O(n) sorting algorithm that is applicable when the array consists only of non-negative integers and k is less than n so that O(n+k) reduces to O(n)  
Time-complexity: O(n+k), where k is the largest integer in the array  
Space-complexity: O(n+k)  
- [Generate Subsets](https://github.com/smilevideo/algorithms/blob/master/generateSubsets.js): Given a non-negative integer n, generate all subsets of the set \[0, 1, ..., n-1\]. Using a binary representation of integers approach. Not sure if optimal.  
Time-complexity: O(2\*\*n logn), because the conversion to binary and the length of the resultant binary string are both O(logn)  
Space-complexity: O(2\*\*n logn), for essentially the same reasons given for the time-complexity
