let main = document.querySelector(".body")
let button = document.querySelector(".btn")

button.addEventListener("click", function(){
    let a = Math.floor(Math.random() * 256)
    a = a.toString(16).padStart(2 , '0') 

    let b = Math.floor(Math.random() * 256)
    b = b.toString(16).padStart(2 , '0')

    let c = Math.floor(Math.random() * 256)
    c = c.toString(16).padStart(2 , '0') 
    

    main.style.backgroundColor = `#${a}${b}${c}`;
})