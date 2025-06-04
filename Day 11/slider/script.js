let svgLeft = document.querySelector(".svg-left")
let svgRight = document.querySelector(".svg-right")
let track = document.querySelector(".slider-track")

let index = 0
let current = 1286

function updateSlider(){
    track.style.transform = `translateX(-${current * index}px)`
    track.style.transition = `transform 1s ease`
}


svgLeft.addEventListener("click" , function(){
    if(index > 0){
        index--;
    updateSlider()
   }
})

svgRight.addEventListener("click" , function(){
    index++;
    updateSlider()

})