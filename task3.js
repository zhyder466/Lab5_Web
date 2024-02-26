function myFunction(arr, func) {
    
    let result = arr.map(func);
    return result;
}

let numbers = [1, 2, 3];
let doubledNumbers = myFunction(numbers, (x) => x * 2);
console.log(doubledNumbers); 
