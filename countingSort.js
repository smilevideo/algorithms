//counting sort algorithm with O(n) time-complexity and O(k) space-complexity, where n is the size of the input array and
//k is the largest integer in the array
// only applicable when the array consists only of non-negative integers and only efficient when k is "small" (i.e. O(n), could use more clarification)

const { performance } = require('perf_hooks');
const t0 = performance.now();

//  Implementation with an array instead of a hash table, runs ~80% slower on my machine (18 ms vs 10ms):

// const countingSort = (array) => {
//     const map = [];
//     const max = Math.max(...array);
//     const ret = [];

//     for (let i = 0; i < array.length; i++) {
//         if (!map[array[i]]) {
//             map[array[i]] = 1;
//         }
//         else {
//             map[array[i]] += 1;
//         }
//     }
    
//     for (let i = 0; i < map.length; i++) {
//         console.log(i);
//         for (let j = 0; j < map[i]; j++) {
//             ret.push(i);
//         }
//     }

//     return ret;
// }

const countingSort = (array) => {
    const map = {};
    const max = Math.max(...array);
    const ret = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!map[array[i]]) {
            map[array[i]] = 1;
        }
        else {
            map[array[i]] += 1; 
        }
    }

    for (let i = 0; i <= max; i++) {
        for (let j = 0; j < map[i]; j++){ 
            ret.push(i);
        }
    }

    return ret;
}

console.log(countingSort([5, 4, 3, 2, 1]));
console.log(countingSort([1, 9, 3, 2, 4, 4, 7, 3, 5, 2]));

const t1 = performance.now();
console.log(`runtime: ${t1 - t0} ms`);