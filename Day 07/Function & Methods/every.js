//check if all elements pass the test and return boolean

let arr = [55,44,5,6,88,99]

let result = arr.every((val) => {
    return val > 55
})

console.log(result)