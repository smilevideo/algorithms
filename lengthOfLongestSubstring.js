//From Leetcode #3:
//Given a string, find the length of the longest substring without repeating characters

//Time-complexity: O(n), Space-complexity: O(n)
const lengthOfLongestSubstring = (string) => {
    const hash = {}; //keep a hash of the letters encountered and their most recent index in the string
    let currentStart = 0; //index at which the currently tracked string starts
    let max = 0; //maximum length to return
    
    for (let i = 0; i < string.length; i++) {
        //if the character is already in the currently tracked string, start tracking a new string at the current index
        if (hash[string[i]] >= currentStart) { 
            currentStart = hash[string[i]] + 1;
        }
        //otherwise check if we can update max
        else {
            max = Math.max(max, i - currentStart + 1);
        }

        hash[string[i]] = i; //set most recent index of character as its corresponding value in the hash table
    }

    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
//outputs 3 because 'abc'
console.log(lengthOfLongestSubstring('bbbbb'));
//outputs 1 because 'b'
console.log(lengthOfLongestSubstring('pwwkew'));
//outputs 3 because 'wke' (or 'kew')
console.log(lengthOfLongestSubstring('dvdf'));
//outputs 3 because 'vdf'