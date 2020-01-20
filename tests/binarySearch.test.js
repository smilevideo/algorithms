const binarySearch = require('../algorithms/binarySearch');

test('simple cases', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
    expect(binarySearch([-10, -9, -5, 1,2,3,4,5], -10)).toBe(0);
    expect(binarySearch([-10, -9, -5, 1,2,3,4,5], -5)).toBe(2);
});

test('edge cases', () => {
    expect(binarySearch([], 1)).toBe(null)

    const arr1 = [-1, 0, 1, 2];
    expect(binarySearch(arr1, 1.5)).toBe(null)
    expect(binarySearch(arr1, 2.5)).toBe(null)
    expect(binarySearch(arr1, -1.5)).toBe(null)
    expect(binarySearch(arr1, -0.5)).toBe(null)
})