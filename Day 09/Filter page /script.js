const product = [
    // Dairy
    { "name": "Amul Milk", "price": 60, "image": "Asset/gold.jpg", "category": "Dairy" },
    { "name": "Epigamia yogurt", "price": 70, "image": "Asset/epigamia.jpg", "category": "Dairy" },
    { "name": "Amul Butter", "price": 55, "image": "Asset/butter.jpg", "category": "Dairy" },
    { "name": "Nestle Milkmaid", "price": 130, "image": "Asset/nestle.jpg", "category": "Dairy" },
    { "name": "Britannia Cheese Slices", "price": 120, "image": "Asset/britannia.jpg", "category": "Dairy" },
    { "name": "Gowardhan Ghee", "price": 560, "image": "Asset/ghee.jpg", "category": "Dairy" },
  
    // Snacks
    { "name": "Lays", "price": 20, "image": "Asset/lays.jpg", "category": "Snack" },
    { "name": "Kurkure", "price": 20, "image": "Asset/kurkure.jpg", "category": "Snack" },
    { "name": "Haldiram's Bhujia", "price": 50, "image": "Asset/haldiram.jpg", "category": "Snack" },
    { "name": "Parle Monaco", "price": 10, "image": "Asset/monaco.jpg", "category": "Snack" },
    { "name": "Bingo Mad Angles", "price": 25, "image": "Asset/bingo.jpg", "category": "Snack" },
    { "name": "Perk", "price": 10, "image": "Asset/perk.jpg", "category": "Snack" },
  
    // Cold Drinks
    { "name": "Coca-Cola", "price": 40, "image": "Asset/coca cola.jpg", "category": "Cold" },
    { "name": "Pepsi", "price": 40, "image": "Asset/pepsi.jpg", "category": "Cold" },
    { "name": "Sprite", "price": 40, "image": "Asset/sprite.jpg", "category": "Cold" },
    { "name": "Fanta", "price": 40, "image": "Asset/fanta.jpg", "category": "Cold" },
    { "name": "Mountain Dew", "price": 40, "image": "Asset/mountain dew.jpg", "category": "Cold" },
  
    // Healthy
    { "name": "Quaker Oats", "price": 160, "image": "Asset/quaker.jpg", "category": "Healthy" },
    { "name": "Saffola Active Oil", "price": 160, "image": "Asset/saffo oil.jpg", "category": "Healthy" },
    { "name": "Eggs", "price": 51, "image": "Asset/eggs.jpg", "category": "Healthy" },
    { "name": "Yoga Bar Protein Bar", "price": 50, "image": "Asset/yoga bar.jpg", "category": "Healthy" },
    { "name": "Almonds", "price": 400, "image": "Asset/almond.jpg", "category": "Healthy" }
  ];
  
  

let selectall = document.querySelector(".select")
let main = document.querySelector(".main")


product.forEach((e) => {
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `<img src="${e.image}" alt="${e.name}" "></img>
    <span>${e.name}</span>  
    <p>₹${e.price}</p>`
    main.appendChild(card)
})


selectall.addEventListener("change" , function(){

    let selectval = document.querySelector(".select").value

    main.innerHTML = " "

    switch (selectval) {
        case "all":
            product.forEach((e) => {
                let card = document.createElement("div")
                card.classList.add("card")
                card.innerHTML = `<img src="${e.image}" alt="${e.name}"></img>
                <span>${e.name}</span>  
                <p>₹${e.price}</p>`
                main.appendChild(card)
            })
            
        break;
        case "dairy":
                let dairy = product.filter((e) => e.category == "Dairy")
                dairy.forEach((e) => {
                    let card = document.createElement("div")
                    card.classList.add("card")
                    card.innerHTML = `<img src="${e.image}" alt="${e.name}"></img>
                    <span>${e.name}</span>  
                    <p>₹${e.price}</p>`
                    main.appendChild(card)
                })
        break;
        case "snack":
                let snack = product.filter((e) => e.category == "Snack")
                snack.forEach((e) => {
                    let card = document.createElement("div")
                    card.classList.add("card")
                    card.innerHTML = `<img src="${e.image}" alt="${e.name}"></img>
                    <span>${e.name}</span>  
                    <p>₹${e.price}</p>`
                    main.appendChild(card)
                })
        break;
        case "cold":
                let cold = product.filter((e) => e.category == "Cold")
                cold.forEach((e) => {
                    let card = document.createElement("div")
                    card.classList.add("card")
                    card.innerHTML = `<img src="${e.image}" alt="${e.name}"></img>
                    <span>${e.name}</span>  
                    <p>₹${e.price}</p>`
                    main.appendChild(card)
                })
        break;
        case "healthy":
                let healthy = product.filter((e) => e.category == "Healthy")
                healthy.forEach((e) => {
                    let card = document.createElement("div")
                    card.classList.add("card")
                    card.innerHTML = `<img src="${e.image}" alt="${e.name}"></img>
                    <span>${e.name}</span>  
                    <p>₹${e.price}</p>`
                    main.appendChild(card)
                })
        break;
    
        default:
        break;
    }
} )


  