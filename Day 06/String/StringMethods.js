//javascript strings are immutable means original string not change it creating new in below examples

//uppercase  
let aum = "hello world";
 aum = aum.toUpperCase()
console.log(aum)

//lowercase
let word = "hello world";
 word = word.toLowerCase()
console.log(word)

//str.trim //remove whitespaces staring and ending only
let white = `                                                    hello   world                                                    ` 
console.log(white) 
console.log(white.trim())

//str.slice //return part of strings str.slice(start , end) also last index will not include 
let h = `12345`
console.log(h.slice(1 , 4))

//str1.concat(str2)  //it just add string and return new string we can do like this also str3 = str1 + str2
   //it is basic so im not writing code

//str.replace(seachvalue , newvalue) //replace "oldvalue" with "newvalue"
let i = `hello`
let c = `hellopopop`
console.log(i.replace("lo" , "p"))   
console.log(c.replaceAll("op" , "y"))

//str.charAt(index) //to show which charAt which index
let z = `hello`
console.log(z.charAt(4))

