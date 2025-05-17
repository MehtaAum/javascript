//Question : prompt the user to enter their full name. generate a username for them based on the input start username with @ , followed by their full name and ending with the fullname length
//ex : user name = "aum" , username should be "@aum3"

let a = prompt("Enter your name : ")
console.log(`@${a}${a.length}`)