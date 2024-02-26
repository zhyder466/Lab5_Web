function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

// Test the function
let arr = [1, 2, 3,4,5,6,7,8,9,10];
let reversedArr = reverseArray(arr);
console.log(reversedArr); 
