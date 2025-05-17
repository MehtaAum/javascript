//normal function
function myFunction(){
    console.log("hello world")
}
myFunction()

//parameter function with return
function param(x , y) {
    sum = x + y
    return sum;
}

let result = param(10,20)
console.log(result)


//Anonymous Functions : you can create function without giving any name 
//ex : 
// function(){
    
// }
//however to use this function you need to assign to a variable
//ex:

let hello = function(){
    console.log("kese ho")
}

hello()


