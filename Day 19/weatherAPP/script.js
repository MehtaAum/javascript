let body = document.querySelector(".body")
let showData = document.querySelector(".show-data")
let input = document.querySelector(".input-city")
let temp = document.querySelector(".temp-show")
let city = document.querySelector(".city-name")
let weather = document.querySelector(".text-show")
let wind = document.querySelector(".wind")
let icon = document.querySelector(".icon-show")
let time = document.querySelector(".time")
let arrow = document.getElementById("arrow")
let flag = true

const weatherBackgrounds = {
  "Sunny": [
    "./asset/sunny 1.jpg",
    "./asset/sunny 2.jpg",
    "./asset/sunny 3.jpg",
    "./asset/sunny 4.jpg",
    "./asset/sunny 5.jpg",
    "./asset/sunny 6.jpg"
  ],
  "Partly cloudy": [
    "./asset/cloudy 1.jpg",
    "./asset/cloudy 2.jpg",
    "./asset/cloudy 3.jpg",
    "./asset/cloudy 4.jpg",
    "./asset/cloudy 5.jpg",
    "./asset/cloudy 6.jpg",
    "./asset/cloudy 7.jpg",
    "./asset/cloudy 8.jpg"
  ],
  "Cloudy": [
    "./asset/cloudy 1.jpg",
    "./asset/cloudy 2.jpg",
    "./asset/cloudy 3.jpg",
    "./asset/cloudy 4.jpg",
    "./asset/cloudy 5.jpg",
    "./asset/cloudy 6.jpg",
    "./asset/cloudy 7.jpg",
    "./asset/cloudy 8.jpg"
  ],
  "Overcast": [
    "./asset/cloudy 1.jpg",
    "./asset/cloudy 2.jpg",
    "./asset/cloudy 3.jpg",
    "./asset/cloudy 4.jpg",
    "./asset/cloudy 5.jpg",
    "./asset/cloudy 6.jpg",
    "./asset/cloudy 7.jpg",
    "./asset/cloudy 8.jpg"
  ],
  "Light rain": [
    "./asset/rain 1.jpg",
    "./asset/rain 2.jpg",
    "./asset/rain 3.jpg",
    "./asset/rain 4.jpg",
    "./asset/rain 5.jpg",
    "./asset/rain 6.jpg",
    "./asset/rain 7.jpg",
    "./asset/rain 8.jpg",
    "./asset/rain 9.jpg"
  ],
  "Moderate rain": [
    "./asset/rain 1.jpg",
    "./asset/rain 2.jpg",
    "./asset/rain 3.jpg",
    "./asset/rain 4.jpg",
    "./asset/rain 5.jpg",
    "./asset/rain 6.jpg",
    "./asset/rain 7.jpg",
    "./asset/rain 8.jpg",
    "./asset/rain 9.jpg"
  ],
  "Heavy rain": [
    "./asset/rain 1.jpg",
    "./asset/rain 2.jpg",
    "./asset/rain 3.jpg",
    "./asset/rain 4.jpg",
    "./asset/rain 5.jpg",
    "./asset/rain 6.jpg",
    "./asset/rain 7.jpg",
    "./asset/rain 8.jpg",
    "./asset/rain 9.jpg"
  ],
  "Patchy rain possible": [
    "./asset/rain 1.jpg",
    "./asset/rain 2.jpg",
    "./asset/rain 3.jpg",
    "./asset/rain 4.jpg",
    "./asset/rain 5.jpg",
    "./asset/rain 6.jpg",
    "./asset/rain 7.jpg",
    "./asset/rain 8.jpg",
    "./asset/rain 9.jpg"
  ]
};


input.addEventListener("keyup" , function () {


    fetch(`http://api.weatherapi.com/v1/current.json?key=f23b4171a3804d818b6134041251506&q=${input.value}`)
    .then((req) => req.json())
    .then((data) => {

    icon.setAttribute("src" , data.current.condition.icon)
    temp.innerHTML = data.current.temp_c + "<sup>°c</sup>"
    city.innerHTML = data.location.name + " " + data.location.country
    weather.innerHTML = data.current.condition.text
    wind.innerHTML = "<p>wind kph : </p> &nbsp" + data.current.wind_kph
    time.innerHTML = data.location.localtime

    //select backgrounds based on weather
    const condition = data.current.condition.text
    const backgrounds = weatherBackgrounds[condition]

    const randomImg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    body.style.backgroundImage = `url("${randomImg}")`
    

    if(condition.toLowerCase().includes("rain")){
        showData.classList.add("text-white")
        wind.classList.add("text-white")
        time.classList.add("text-white")
    }
    else{
         showData.classList.remove("text-white")
        wind.classList.remove("text-white")
        time.classList.remove("text-white")
    }

     
    })
      
})

    let slide = document.createElement('div')
    body.appendChild(slide)
    
arrow.addEventListener("click" , function () {


    if(flag){
        arrow.classList.remove("bottom-0")
        arrow.classList.add("bottom-[510px]")
        arrow.style.transform = "rotate(180deg)"
        flag = false
        slide.className = "slide"
    }
    else{
        arrow.classList.remove("bottom-[510px]")
        arrow.classList.add("bottom-0")
        arrow.style.transform = "rotate(0deg)"
        flag = true
        slide.className = "slide-after"
    }

})



