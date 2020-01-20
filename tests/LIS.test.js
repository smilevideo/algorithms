const LIS = require('../algorithms/longestIncreasingSubsequence');

test('simple cases', () => {
    expect(LIS.LIS([])).toStrictEqual([]);
    expect(LIS.LIS([6, 2, 5, 1, 7, 4, 8, 3])).toEqual([2, 5, 7, 8]);
});
