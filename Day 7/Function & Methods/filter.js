// create a new array with all elements that pass a test (condition) provided by a callback function.

let arr = [1,2,3,4,5,6,7,8,9,10]

let b = arr.filter((val) => {
    return val == 4
})
console.log(b)