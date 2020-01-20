//Given a sorted (in ascending order, in this case) array of numbers, find a specific number and return the index

//Time-complexity: O(logn), Space-complexity: O(1)
const binarySearch = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2); //could also use Math.ceil - neither will be strictly better than the other in every case

    while (start <= end) {
        if (x < arr[mid]) {
            end = mid - 1;
        }
        else if (x > arr[mid]) {
            start = mid + 1;
        }
        else {
            return mid;
        }

        mid = Math.floor((start + end) / 2);
    }

    return null; //number wasn't found so don't return an index;
}
module.exports = binarySearch;
