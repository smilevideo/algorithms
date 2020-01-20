const LIS = require('../algorithms/longestIncreasingSubsequence');

test('simple cases', () => {
    expect(LIS.LIS([1, 1, 1])).toEqual([1, 1, 1]);
    expect(LIS.LIS([3, 2, 1])).toEqual([1]);
    expect(LIS.LIS([6, 2, 5, 1, 7, 4, 8, 3])).toEqual([2, 5, 7, 8]);
    expect(LIS.LIS([3, 5, 2, 4, 5, 6])).toEqual([2, 4, 5, 6]);
});

test('edge cases', () => {
    expect(LIS.LIS([])).toStrictEqual([]);
    expect(LIS.LIS([1])).toStrictEqual([1]);
});