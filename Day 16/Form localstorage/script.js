let form = document.querySelector(".box")
let button = document.querySelector(".btn-submit")
let select1 = document.getElementById("country")
let select2 = document.getElementById("country2")
let nameForm = document.getElementById("name")
let numberForm = document.getElementById("number")
let pincode = document.getElementById("pincode")
let flat = document.getElementById("flat")
let area = document.getElementById("area")
let landmark = document.getElementById("landmark")
let town = document.getElementById("town")
let male = document.getElementById("male")
let female = document.getElementById("female")
let checkbox = document.getElementById("checkbox")
let msg = document.querySelector(".msg")
let msg1 = document.querySelector(".msg1")
let msg2 = document.querySelector(".msg2")
let msg3 = document.querySelector(".msg3")
let msg4 = document.querySelector(".msg4")
let msg5 = document.querySelector(".msg5")
let msg6 = document.querySelector(".msg6")
let msg7 = document.querySelector(".msg7")
let msg8 = document.querySelector(".msg8")


// VALIDATION
const regexName = /^[A-Za-z\s]+$/
const regexNumber = /^\d{10}$/
const regexPincode = /^\d{6}$/
const regexFlat = /^[A-Za-z0-9\s,.-]+$/
const regexArea = /^[A-Za-z0-9\s,.-]+$/
const regexTown = /^[A-Za-z\s]+$/;
const regexLandmark = /^[A-Za-z0-9\s,.-]*$/;

function checkVal(){

    let allValid = true

    let message = []
    let message1 = []
    let message2 = []
    let message3 = []
    let message4 = []
    let message5 = []
    let message6 = []
    let message7 = []
    let message8 = []

// 
if(nameForm.value.trim() == ""){
    msg.innerHTML = ""
    allValid = false;  
}
else if(!regexName.test(nameForm.value.trim())){
    message.push("Please enter a valid name")
    msg.innerHTML = message.join();
    allValid = false;  
} 
else{
    msg.innerHTML = ""
}

// 
if(numberForm.value.trim() == ""){
    msg1.innerHTML = ""
    allValid = false;
}
else if(!regexNumber.test(numberForm.value)){
    message1.push("Please enter a valid number")
    msg1.innerHTML = message1.join();
    allValid = false;
}
else{
    msg1.innerHTML = ""
}

// 
if(pincode.value.trim() == ""){
    msg2.innerHTML = ""
    allValid = false;
}
else if(!regexPincode.test(pincode.value)){
    message2.push("Please enter a valid pincode")
    msg2.innerHTML = message2.join();
    allValid = false;
}
else{
    msg2.innerHTML = ""
}

// 
if(flat.value.trim() == ""){
    msg3.innerHTML = ""
    allValid = false;
}
else if(!regexFlat.test(flat.value)){
    message3.push("Please enter a valid flat number")
    msg3.innerHTML = message3.join();
    allValid = false;
}
else{
    msg3.innerHTML = ""
}

// 
if(area.value.trim() == ""){
    msg4.innerHTML = ""
    allValid = false;
}
else if(!regexArea.test(area.value)){
    message4.push("Please enter a valid area")
    msg4.innerHTML = message4.join();
    allValid = false;
}
else{
    msg4.innerHTML = ""
}

// 
if(landmark.value.trim() == ""){
    msg5.innerHTML = ""
    allValid = false;
}
else if(!regexLandmark.test(landmark.value)){
    message5.push("Please enter a valid landmark")
    msg5.innerHTML = message5.join();
    allValid = false;
}
else{
    msg5.innerHTML = ""
}

// 
if(town.value.trim() == ""){
    msg6.innerHTML = ""
    allValid = false;
}
else if(!regexTown.test(town.value)){
    message6.push("Please enter a valid town")
    msg6.innerHTML = message6.join();
    allValid = false;
}
else{
    msg6.innerHTML = ""
}

// 
if(!male.checked && !female.checked){
    message7.push("Please enter gender");
    msg7.innerHTML = message7.join();
    allValid = false;
}
else{
    msg7.innerHTML = "";
}

if(!checkbox.checked){
    message8.push("Please accept terms");
    msg8.innerHTML = message8.join();
    allValid = false;
} else {
    msg8.innerHTML = "";
}


return allValid

}

form.addEventListener('submit', function(event) {
    
  event.preventDefault();

  let isValid = checkVal();

    if (isValid) {
        //LOCAL STORAGE & SHOWING DATA TO USER

        let genderVal = document.querySelector('input[name="gender"]:checked').value
        let checkboxVal = checkbox.checked

        let userData = {
            country: select1.value,
            name: nameForm.value.trim(),
            mobile: numberForm.value.trim(),
            pincode: pincode.value.trim(),
            flat: flat.value.trim(),
            area: area.value.trim(),
            landmark: landmark.value.trim(),
            town: town.value.trim(),
            state: select2.value,
            gender: genderVal,
            isDefault: checkboxVal
        }

         localStorage.setItem("user1", JSON.stringify(userData));
 
    //optional method      
    // for (let key in userData) {
    //   document.write(`<p><strong>${key}</strong>: ${userData[key]}</p>`);
    // }
    //optional method

    const keys = Object.keys(userData)
    for(let i = 0; i < keys.length; i++){
        let key = keys[i]
        document.write(`<p><strong>${key}</strong>: ${userData[key]}</p>`);
    }


        //LOCAL STORAGE & SHOWING DATA TO USER
    }
    else{
        alert("Fill proper details !")
    }


});



// VALIDATION


