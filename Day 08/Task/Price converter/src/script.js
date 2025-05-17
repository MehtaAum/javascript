let button = document.querySelector(".btn")

button.addEventListener("click" , function(){

    let input1 = document.querySelector(".input1").value.split(",")
    input1 = input1.map((val) => {
        return Number(val.trim())
    })
    
    if(input1.length != 10){
        alert("Enter minimum 10 product price")
    }

    let input2 = Number(document.querySelector(".input2").value)

    let inr = input1.map((val) => {
        return val * input2
    })

    let usdPara = document.querySelectorAll(".two .info p")
    let inrPara = document.querySelectorAll(".three .info p")

    input1.forEach((val , index) => {
        usdPara[index].textContent = `$ ${val}` 
    })
    inr.forEach((val , index) => {
        inrPara[index].textContent = `₹ ${val}` 
    })


})
console.log(inr)
