// 1
function hasPairWithSum(arr, num) {
    const seen = new Set();
    
    for (const value of arr) {
        const target = num - value;
        
        if (seen.has(target)) {
            return true;
        }
        seen.add(value);
    }
    
    return false;
}

const array = [1, 2, 3, 4, 5];
const number = 9;
console.log(hasPairWithSum(array, number)); 

// 2
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}
const Numberarray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(Numberarray);
console.log(sortedArray);  

// 3
function bubbleSortStrings(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}

const arrayString = ["banana", "apple", "cherry", "date"];
const sortedArrayString = bubbleSortStrings(arrayString);
console.log(sortedArrayString); 

// 4
function mergeArrays(arr1, arr2) {
    // İki arrayı birləştirmək
    return arr1.concat(arr2);
}