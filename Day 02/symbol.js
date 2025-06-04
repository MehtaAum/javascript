//symbol keys are not invisible , but they are non-enumerable by default (means) :- * key is there in object (not invisible) * but when you go through object using loops or function it doesn’t show up

let password = Symbol("password")


let user = {
    name : "aum",
    [password] : "secret123" //symbol as a key 
}

console.log(user)
console.log(user[password]) //you can still access it if you know the symbol