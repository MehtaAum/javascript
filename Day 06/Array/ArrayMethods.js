//push() //add at end
let foodItems = ["apple" , "mango" , "litchi" , "grapes"]
foodItems.push("banana" , "orange")
console.log(foodItems)

//pop() //delete from end & return
let items = ["apple" , "mango" , "litchi" , "grapes"]
let deletedItems = items.pop()
console.log(items)
console.log(`Deleted : ${deletedItems}`)

//tostring() //converts array to string //it will not change original array it return new string
let marks = [33,44,55,44]
console.log(marks)
console.log(marks.toString())
console.log(marks)

//concat() //joins multiple arrays & return result
let marvel = ["spiderman" , "ironman"]
let dcHeroes = ["batman"]
let indianHeroes = ["shaktiman" , "krish"]

let heroes = marvel.concat(dcHeroes , indianHeroes)
console.log(heroes)

//unshift() adds to start
let marv = ["spiderman" , "ironman"]
marv.unshift("antman")
console.log(marv)

//shift() delete from start and return
let mar = ["spiderman" , "ironman"]
mar.shift()
console.log(mar)

//slice() //return piece of the array slice(startindex , endindex) //original array change nahi karta //non-inclusive
let ma = ["spiderman" , "ironman" , "batman" , "antman" , "dr.strange" , "hulk"]
let sli = ma.slice(1,3)
console.log(sli)
console.log(ma)

//splice() //change original array(add , remove , replace) //splice(startindex , delcount , newelement) //you can do add,delete,replace element //it also little bit work like slice
let o = [1,2,3,4,5,6]
console.log(o)
o.splice(1,2,99,100)
console.log(o)

