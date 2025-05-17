let main = document.querySelector(".body")
let button = document.querySelector(".btn")

button.addEventListener("click", function(){
    const a = Math.floor(Math.random() * 256) 
    const b = Math.floor(Math.random() * 256) 
    const c = Math.floor(Math.random() * 256) 
    main.style.backgroundColor = `rgb(${a},${b},${c})`;
})