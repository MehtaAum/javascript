//findIndex based on condition/test and return the index

let a = [11,22,33,44]

let output = a.findIndex((val) => {
   return val > 33
})
console.log(output)