let global = "aum" //global scope

function print(){
    console.log(global)
}

print() //it will print coz let is currently in global scope

console.log(global) //accessible anywhere