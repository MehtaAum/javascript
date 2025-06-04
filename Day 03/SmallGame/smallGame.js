//create a game where you start with any random number. ask the user to keep guessing the game number until the user enters correct value

console.log("------ welcome to game ------")

let corrValue = 25
let count = 0
let askValue;

while(askValue !== corrValue){
    let a = prompt("Guess Number : ")
    askValue = Number(a)
    ++count
}

console.log("you guess right number after this much try : " , count)
