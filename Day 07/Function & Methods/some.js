//at least one element in array satisfy provide condition it return boolean true/false

let a = [22,55,66,888,99,11]

let output = a.some((val) => {
    return val > 99
})
console.log(output)