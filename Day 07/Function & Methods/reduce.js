//perform some operation & reduce the array to single value. it return that single value

let arr = [1,2,3,4]

let output = arr.reduce((prev , current) =>{
    return prev + current
})
console.log(output)