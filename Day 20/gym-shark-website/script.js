let body = document.querySelector(".body");
let circleLeft = document.querySelector(".circle-l")
let circleRight = document.querySelector(".circle-r")
let subSlider = document.querySelector(".sub-slider")

let current = 0
let cardWidth = function () {
  return document.querySelector(".content").offsetWidth + 8
}

circleRight.addEventListener("click", function () {
  current -= cardWidth()
  subSlider.style.transform = `translateX(${current}px)`
  subSlider.style.transition = `transform 0.4s ease`
})

circleLeft.addEventListener("click", function () {
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

// slider 3
let womenPrevButton = document.querySelector(".women-prev");
let womenNextButton = document.querySelector(".women-next");
let womenSliderTrack = document.querySelector(".women-sub-slider");

let womenCurrentPosition = 0;

let getWomenCardWidth = function () {
  return document.querySelector(".women-card").offsetWidth + 8;
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

// video 2
let videoHero2 = document.getElementById("video-hero2");
let heroVideo2 = document.getElementById("heroVideo2");

videoHero2.addEventListener("click", function (e) {
  if (heroVideo2.paused) {
    heroVideo2.play();
  } else {
    heroVideo2.pause();
  }
});

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

// ======================= CART =======================
let addCartBtn = document.querySelector("#add-cart-btn");
let divCart = document.createElement("div");

//Load cart from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

let quantityCount = 0;
let roundCountAdd = 0;

divCart.style.display = "none";
divCart.className = "w-[100%] sm:w-[70%] md:w-[40%] lg:w-[30%] h-[100vh] bg-white fixed top-0 right-0 z-50 translate-x-full transition-transform duration-500 ease-in-out overflow-y-scroll shadow-md";

document.body.appendChild(divCart);

addCartBtn.addEventListener("click", function () {
  divCart.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";
  updateCart();
  requestAnimationFrame(() => {
    divCart.classList.remove("translate-x-full");
  });
});

let addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let productCard = btn.closest(".product-card");
    let title = productCard.querySelector(".title").innerText;
    let price = productCard.querySelector(".price-div").innerText;
    let imgDiv = productCard.querySelector(".img-div");
    let bg = window.getComputedStyle(imgDiv).backgroundImage;
    let image = bg.slice(5, -2);

    let existingItem = cartItems.find((item) => item.title === title);

    if (existingItem) {
      existingItem.quantity += 1;
      roundCountAdd++;
    } else {
      cartItems.push({
        title: title,
        bg: image,
        quantity: 1,
        price: price,
      });
    }

    updateCart();
  });
});

function updateCart() {
  // Save to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  let itemsHtml = cartItems.map((item, index) => `
    <div class="p-4 border-b border-b-[#9c9c9c] flex gap-4 items-center">
      <img src="${item.bg}" alt="Product" class="w-[70px] h-[70px] object-cover rounded-[10px]" />
      <div class="flex-1">
        <h3 class="font-semibold text-[16px] mb-2">${item.title}</h3>
        <h3 class="font-semibold text-[16px] mb-2">${item.price}</h3>
        <div class="font-medium text-[16px] flex items-center gap-3">
          Quantity :
          <div class="minus-div w-[23px] h-[23px] border-[0.5px] rounded-2xl flex justify-center items-center cursor-pointer" data-index="${index}">−</div>
          <span>${item.quantity}</span>
          <div class="plus-div w-[23px] h-[23px] border-[0.5px] rounded-2xl flex justify-center items-center cursor-pointer" data-index="${index}">+</div>
        </div>
      </div>
      <div class="delete-box cursor-pointer active:scale-[70%] duration-[0.3s] will-change-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#000" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17" />
        </svg>
      </div>
    </div>
  `).join("");

  let totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  let roundCount = document.querySelector(".round-count");
  if (roundCount) {
    if (totalItemCount > 0) {
      roundCount.classList.add("bg-black");
      roundCount.innerHTML = `<div>${totalItemCount}</div>`;
    } else {
      roundCount.classList.remove("bg-black");
      roundCount.innerHTML = "";
    }
  }

  divCart.scrollTop = divCart.scrollHeight;

  let subtotal = 0;
  cartItems.forEach((item) => {
    let numPrice = parseFloat(item.price.replace(/[^\d.]/g, '').trim());
    if (!isNaN(numPrice)) subtotal += numPrice * item.quantity;
  });

divCart.innerHTML = `
    <div class="w-full h-[35px] relative">
      <svg xmlns="http://www.w3.org/2000/svg" id="cross-cart" width="26" height="26" viewBox="0 0 24 24"
        class="absolute cursor-pointer right-[10px] top-[10px]">
        <path fill="#000" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
      </svg>
    </div>
    <div>${itemsHtml}</div>

    <div class="payment-info w-[100%] p-4 flex flex-col gap-3 ">
          <div class="flex justify-between items-center"> <div class="font-medium">Sub Total </div> <div>$${subtotal.toFixed(2)}</div> </div>

          <div class="flex justify-between items-center"> <div class="font-medium cursor-pointer flex gap-1 items-center" title="shipping fee in US">Shipping Fee Estimate
            <svg xmlns="http://www.w3.org/2000/svg" width="18" class="font-light" height="18" viewBox="0 0 24 24">
            <path fill="#000" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
            </svg>
          </div> <div>FREE</div> </div>

          <div class="flex justify-between items-center"> <div class="font-bold flex gap-2 items-center">Total<sub class="text-[10px]">VAT & DUTIES INCLUSIVE</sub></div> <div class="font-bold">$${subtotal.toFixed(2)}</div> </div>
    </div>

    <div class="empty-div w-[100%] h-[60px] mt-2"></div>
    <div class=" w-[100%] h-[auto] flex justify-center items-center">
     <button
        class="payment-checkout w-[300px] fixed bottom-3 h-[40px] rounded-2xl bg-[#000000] hover:scale-[98%] will-change-transform duration-[0.2s] cursor-pointer text-white"
        style="
          box-shadow: rgba(17, 17, 26, 0.7) 0px 8px 24px,
                      rgba(17, 17, 26, 0.1) 0px 16px 56px,
                      rgba(17, 17, 26, 0.1) 0px 24px 80px;
        "
        onmouseover="this.style.boxShadow='rgba(17,17,26,0.5) 0px 8px 24px, rgba(17,17,26,0.1) 0px 16px 56px, rgba(17,17,26,0.1) 0px 24px 80px'"
        onmouseout="this.style.boxShadow='rgba(17,17,26,0.8) 0px 8px 24px, rgba(17,17,26,0.1) 0px 16px 56px, rgba(17,17,26,0.1) 0px 24px 80px'"
      >
        Proceed to checkout
</button>
    </div>

   
  `;
  divCart.style.display = "block";

  divCart.querySelector("#cross-cart").addEventListener("click", function () {
    divCart.classList.add("translate-x-full");
    setTimeout(() => { divCart.style.display = "none"; }, 500);
  });

  divCart.querySelectorAll(".plus-div").forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = btn.getAttribute("data-index");
      cartItems[index].quantity++;
      roundCountAdd++;
      updateCart();
    });
  });

  divCart.querySelectorAll(".minus-div").forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = btn.getAttribute("data-index");
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
      } else {
        cartItems.splice(index, 1);
      }
      updateCart();
    });
  });

  divCart.querySelectorAll(".delete-box").forEach((delBtn, index) => {
    delBtn.addEventListener("click", () => {
      cartItems.splice(index, 1);
      updateCart();
    });
  });
}

// Checkout & clear localStorage
divCart.addEventListener("click", function (e) {
  if (e.target.classList.contains("payment-checkout")) {
    alert("✅ Payment Successfully");

    let roundCount = document.querySelector(".round-count");
    if (roundCount) {
      roundCount.classList.remove("bg-black");
      roundCount.innerHTML = "";
    }

    cartItems = [];

    //Clear localStorage on checkout
    localStorage.removeItem("cartItems");

      divCart.innerHTML = `

         <div class="w-full h-[35px] relative">
        <svg xmlns="http://www.w3.org/2000/svg" id="cross-cart" width="26" height="26" viewBox="0 0 24 24"
          class="absolute cursor-pointer right-[10px] top-[10px]">
          <path fill="#000" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
        </svg>
      </div>


       <div class="empty-div w-[100%] h-[60px]"></div>
      <div class=" w-[100%] h-[auto] flex justify-center items-center">
       <button
          class="payment-checkout w-[300px] fixed bottom-3 h-[40px] rounded-2xl bg-[#000000] hover:scale-[98%] will-change-transform duration-[0.2s] cursor-pointer text-white"
          style="
            box-shadow: rgba(17, 17, 26, 0.7) 0px 8px 24px,
                        rgba(17, 17, 26, 0.1) 0px 16px 56px,
                        rgba(17, 17, 26, 0.1) 0px 24px 80px;
          "
          onmouseover="this.style.boxShadow='rgba(17,17,26,0.5) 0px 8px 24px, rgba(17,17,26,0.1) 0px 16px 56px, rgba(17,17,26,0.1) 0px 24px 80px'"
          onmouseout="this.style.boxShadow='rgba(17,17,26,0.8) 0px 8px 24px, rgba(17,17,26,0.1) 0px 16px 56px, rgba(17,17,26,0.1) 0px 24px 80px'"
        >
          Proceed to checkout
  </button>
      </div>
     
     `
  }

  divCart.style.display = "block";

  divCart.querySelector("#cross-cart").addEventListener("click", function () {
    divCart.classList.add("translate-x-full");
    setTimeout(() => { divCart.style.display = "none"; }, 500);
  });
});

updateCart();
