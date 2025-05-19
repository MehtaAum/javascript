const form = document.getElementById("form")
const name = document.getElementById("name")
const pass = document.getElementById("pass")
const errorElement = document.getElementById("error")
const passerrorElement = document.getElementById("passerror")

form.addEventListener("submit" , function(e){

    let messagesname = []
    let messagespass = []

    if(name.value == "" || name.value == null){
        messagesname.push("name is required")
    }
    if(pass.value.length < 8 ){
        messagespass.push("password required 8 value")
    }

    if(pass.value == "password" ){
        messagespass.push("password is not password")
    }



    if(messagesname.length > 0){
        errorElement.innerText = messagesname.join(", ")
        e.preventDefault() // prevent to submit 
         
    }
    else{
        errorElement.innerText = "" //clear old messages
    }



    if(messagespass.length > 0){
        passerrorElement.innerText = messagespass.join(", ")
        e.preventDefault() // prevent to submit 
         
    }
    else{
         passerrorElement.innerText = ""
    }

})