//forEach loop is built in array method in js used to loop through each element in an array 
//parameter :- 
//* element → The current value in the array.
//* index (optional) → The index (position) of the current value.
//* array (optional) → The original array being looped over.
//for each does not return anything
// It's often used when you just want to do something with each item, not create a new array.

let arr = [`mumbai`,`pune`,`delhi`]

arr.forEach((element , index , array)=>{
    console.log(element , index , array)
})

// let arr = [`mumbai`,`pune`,`delhi`]

// arr.forEach((element , index , array)=>{
//     console.log(element , index , array)
// })


//callback function 
//callback function are pass as PARAMETER to another function - in this case in for each  

let array = [1,2,3,4,5]

array.forEach(function (item) {
    console.log(item)
})


//method 2 : for callback function
let fruit = ["apple" , "mango" , "litchi"]

let fun = (val) => {
    console.log(val)
}

fruit.forEach(fun)
