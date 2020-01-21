const threeSum = require('../algorithms/3sum');

test('simple cases', () => {
    //value found
    expect(threeSum.threeSum2p([1,4,5,7], 13)).toEqual([1,5,7]);
    expect(threeSum.threeSum2p([1,2,3,4,5,6], 6)).toEqual([1,2,3]);
    expect(threeSum.threeSum2p([5,7,9,11,13], 33)).toEqual([9,11,13]);

    //should return null
    expect(threeSum.threeSum2p([5,7,9,11,13], 1)).toEqual(null);
    expect(threeSum.threeSum2p([1,2,3,4,5,6], 50)).toEqual(null);

    //hash version
    expect(threeSum.threeSumHash([1,4,5,7], 13)).toEqual([1,5,7]);
    expect(threeSum.threeSumHash([1,2,3,4,5,6], 6)).toEqual([1,2,3]);
    expect(threeSum.threeSumHash([5,7,9,11,13], 33)).toEqual([9,11,13]);

    //should return null
    expect(threeSum.threeSumHash([5,7,9,11,13], 1)).toEqual(null);
    expect(threeSum.threeSumHash([1,2,3,4,5,6], 50)).toEqual(null);
});

test('edge cases', () => {
    
});