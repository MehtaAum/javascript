let moon = document.querySelector(".moon")
let sun = document.querySelector(".sun")
let main = document.querySelector("body")
let header = document.querySelector(".header")

moon.addEventListener("click" , function(){
    main.setAttribute("class" , "m1Main")
    sun.classList.remove("hidetoggle")
    moon.classList.add("hidetoggle")
    header.classList.toggle("m1header")
})  

sun.addEventListener("click" , function(){
    main.setAttribute("class" , "s1Main")
    moon.classList.remove("hidetoggle")
    sun.classList.add("hidetoggle")
    header.classList.toggle("m1header")
})  