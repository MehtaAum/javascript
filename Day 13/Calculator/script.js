let display = document.querySelector(".display")
const seven = document.querySelector(".seven").innerHTML
const eight = document.querySelector(".eight").innerHTML
const nine = document.querySelector(".nine").innerHTML
const four = document.querySelector(".four").innerHTML
const five = document.querySelector(".five").innerHTML
const six = document.querySelector(".six").innerHTML
const three = document.querySelector(".three").innerHTML
const two = document.querySelector(".two").innerHTML
const one = document.querySelector(".one").innerHTML
const zero = document.querySelector(".zero").innerHTML
const decimal = document.querySelector(".comma").innerHTML
let expression = ""

document.addEventListener("keydown" , function (event) {
    if(event.key == '1'){
        oneFun()
    }
    if(event.key == '2'){
        twoFun()
    }
    if(event.key == '3'){
        threeFun()
    }
    if(event.key == '4'){
        fourFun()
    }
    if(event.key == '5'){
        fiveFun()
    }
    if(event.key == '6'){
        sixFun()
    }
    if(event.key == '7'){
        sevenFun()
    }
    if(event.key == '8'){
        eightFun()
    }
    if(event.key == '9'){
        nineFun()
    }
    if(event.key == '0'){
        zeroFun()
    }
    if(event.key == '.'){
        decimalFun()
    }
    if(event.key == 'Escape'){
        acFun()
    }
    if(event.key == 'Backspace'){
        clearFun()
    }
    if(event.key == '+'){
        addFun()
    }
    if(event.key == '-'){
        subFun()
    }
    if(event.key == '*'){
        multiFun()
    }
    if(event.key == '%'){
        perFun()
    }
    if(event.key == '/'){
        divideFun()
    }
    if(event.key == 'Enter'){
        equalFun()
    } 
})


function acFun(){
    display.innerHTML = ""
    expression = ""
}

function sevenFun() {
    display.innerHTML += seven
}

function eightFun() {
    display.innerHTML += eight
}

function nineFun() {
    display.innerHTML += nine
}

function fourFun() {
    display.innerHTML += four 
}

function fiveFun() {
    display.innerHTML += five
}

function sixFun() {
    display.innerHTML += six
}

function threeFun() {
    display.innerHTML += three
}

function twoFun() {
    display.innerHTML += two
}

function oneFun() {
    display.innerHTML += one
}

function zeroFun() {
    display.innerHTML += zero
}

function decimalFun() {
    if(!display.innerHTML.includes('.')){
        
        display.innerHTML += decimal
    }
}

function clearFun() {
    display.innerHTML =  display.innerHTML.slice(0,-1)
}

function addFun() {
    expression += display.innerHTML + "+"
    display.innerHTML = ""
}

function subFun() {
    expression += display.innerHTML + "-"
    display.innerHTML = ""
}

function multiFun() {
    expression += display.innerHTML + "*"
    display.innerHTML = ""
}

function divideFun() {
    expression += display.innerHTML + "/"
    display.innerHTML = ""
}

function perFun() {
    let value = parseFloat(display.innerHTML)
    if(!isNaN(value)){
        display.innerHTML = value/100
    }
}

function equalFun() {
    expression += display.innerHTML
    try {
        let result = eval(expression) //it convert string into maths problem ex: "10 + 5" = 15

        display.innerHTML = ""
        display.innerHTML += result
        expression = ""
    } catch (error) {
        display.innerHTML = "error";
        expression = ""
        
    } 
}


