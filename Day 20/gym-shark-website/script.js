let body = document.querySelector(".body");
let ham = document.querySelector(".hamburger");
let searchLogo = document.querySelector(".search-logo")
let circleLeft = document.querySelector(".circle-l")
let circleRight = document.querySelector(".circle-r")
let subSlider = document.querySelector(".sub-slider")

//slider
let current = 0

let cardWidth = function (){
    return document.querySelector(".content").offsetWidth + 8
}
//slider

let hamClick = document.createElement("div");
hamClick.classList = "w-full fixed z-40 top-0 h-screen border-2 bg-white";
hamClick.style.transition = "all 0.5s ease";
hamClick.style.opacity = "0";
hamClick.style.transform = "translateX(-300px)";

let searchClick = document.createElement("div");
searchClick.classList = "w-full fixed top-0 z-40 h-screen border-2 bg-[white]";
searchClick.style.transition = "all 0.5s ease";
searchClick.style.opacity = "0";
searchClick.style.transform = "translateX(-300px)";

ham.addEventListener("click", function () {

    body.appendChild(hamClick);
    hamClick.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" id="cross" width="26" height="26" viewBox="0 0 24 24">
        <path fill="#000" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
        </svg>
    `
    
    setTimeout(() => {
      hamClick.style.opacity = "1";
      hamClick.style.transform = "translateX(0)";
    }, 10);


    let cross = document.getElementById("cross");
    cross.classList = `absolute right-[10px] top-[10px]`

    cross.addEventListener("click", function () {

        hamClick.style.opacity = "0";
        hamClick.style.transform = "translateX(-300px)";
        setTimeout(() => {
            body.removeChild(hamClick);
        }, 500);

    });

  
});

searchLogo.addEventListener("click" , function(){
    body.appendChild(searchClick);
    searchClick.innerHTML = `
    <div class="w-[100%] h-[70px] flex justify-between items-center px-[25px]">
        <svg xmlns="http://www.w3.org/2000/svg" id="arrow-search" class="w-[30px] h-[30px]"  viewBox="0 0 24 24">
        <path fill="#000" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z" />
        </svg> 

        <div class="relative w-[86%]">
            <input type="text" id="search" class="bg-[#f5f4f4] hover:bg-[#e0e0e0] duration-[0.3s] outline-none w-[100%] px-3 ps-10 h-[50px] rounded-[10px]" placeholder="Product">

            <svg xmlns="http://www.w3.org/2000/svg" class="ms-2 absolute bottom-[14px] z-10" width="23" height="23" viewBox="0 0 24 24">
            <path fill="#000" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
            </svg> 
        </div>
    </div>    
    `
    setTimeout(() => {
        searchClick.style.opacity = `1`
        searchClick.style.transform = "translateX(0)";
    }, 10);

    let arrowSearch = document.getElementById("arrow-search")

    arrowSearch.addEventListener("click" , function () {
        searchClick.style.opacity = "0";
        searchClick.style.transform = "translateX(-300px)";
        setTimeout(() => {
            body.removeChild(searchClick);
        }, 500);
    })
})

circleRight.addEventListener("click" , function () {
    current -= cardWidth()
    subSlider.style.transform = `translateX(${current}px)`
    subSlider.style.transition = `transform 0.4s ease`
})

circleLeft.addEventListener("click" , function () {
    current += cardWidth()
    subSlider.style.transform = `translateX(${current}px)`
    subSlider.style.transition = `transform 0.4s ease`
})

// video paused & play
let videoHero = document.getElementById("video-hero");
let heroVideo = document.getElementById("heroVideo");

videoHero.addEventListener("click", function (e) {
  if (heroVideo.paused) {
    heroVideo.play();
  } else {
    heroVideo.pause();
  }
});
// video paused & play



// slider 2
let menPrevButton = document.querySelector(".men-prev");
let menNextButton = document.querySelector(".men-next");
let menSliderTrack = document.querySelector(".men-sub-slider");

let menCurrentPosition = 0;

let getMenCardWidth = function () {
  return document.querySelector(".men-card").offsetWidth + 8;
};

menNextButton.addEventListener("click", function () {
  menCurrentPosition -= getMenCardWidth();
  menSliderTrack.style.transform = `translateX(${menCurrentPosition}px)`;
  menSliderTrack.style.transition = `transform 0.4s ease`;
});

menPrevButton.addEventListener("click", function () {
  menCurrentPosition += getMenCardWidth();
  menSliderTrack.style.transform = `translateX(${menCurrentPosition}px)`;
  menSliderTrack.style.transition = `transform 0.4s ease`;
});

// slider 2

// slider 3
let womenPrevButton = document.querySelector(".women-prev");
let womenNextButton = document.querySelector(".women-next");
let womenSliderTrack = document.querySelector(".women-sub-slider");

let womenCurrentPosition = 0;

let getWomenCardWidth = function () {
  return document.querySelector(".women-card").offsetWidth + 8; // card width + gap
};

womenNextButton.addEventListener("click", function () {
  womenCurrentPosition -= getWomenCardWidth();
  womenSliderTrack.style.transform = `translateX(${womenCurrentPosition}px)`;
  womenSliderTrack.style.transition = `transform 0.4s ease`;
});

womenPrevButton.addEventListener("click", function () {
  womenCurrentPosition += getWomenCardWidth();
  womenSliderTrack.style.transform = `translateX(${womenCurrentPosition}px)`;
  womenSliderTrack.style.transition = `transform 0.4s ease`;
});

// slider 3

//video 2 play & paused
let videoHero2 = document.getElementById("video-hero2");
let heroVideo2 = document.getElementById("heroVideo2");

videoHero2.addEventListener("click", function (e) {
  if (heroVideo2.paused) {
    heroVideo2.play();
  } else {
    heroVideo2.pause();
  }
});
//video 2 play & paused


// slider 4
let accessoriesPrevButton = document.querySelector(".accessories-prev");
let accessoriesNextButton = document.querySelector(".accessories-next");
let accessoriesSliderTrack = document.querySelector(".accessories-sub-slider");

let accessoriesCurrentPosition = 0;

let getAccessoriesCardWidth = function () {
  return document.querySelector(".accessories-card").offsetWidth + 8;
};

accessoriesNextButton.addEventListener("click", function () {
  accessoriesCurrentPosition -= getAccessoriesCardWidth();
  accessoriesSliderTrack.style.transform = `translateX(${accessoriesCurrentPosition}px)`;
  accessoriesSliderTrack.style.transition = `transform 0.4s ease`;
});

accessoriesPrevButton.addEventListener("click", function () {
  accessoriesCurrentPosition += getAccessoriesCardWidth();
  accessoriesSliderTrack.style.transform = `translateX(${accessoriesCurrentPosition}px)`;
  accessoriesSliderTrack.style.transition = `transform 0.4s ease`;
});
// slider 4
