const LIS = require('../algorithms/longestIncreasingSubsequence');

test('simple cases', () => {
    expect(LIS([1, 1, 1])).toEqual([1, 1, 1]);
    expect(LIS([3, 2, 1])).toEqual([1]);
    expect(LIS([6, 2, 5, 1, 7, 4, 8, 3])).toEqual([2, 5, 7, 8]);
    expect(LIS([3, 5, 2, 4, 5, 6])).toEqual([2, 4, 5, 6]);
});

test('edge cases', () => {
    expect(LIS([])).toStrictEqual([]);
    expect(LIS([1])).toStrictEqual([1]);
});