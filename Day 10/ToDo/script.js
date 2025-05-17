let box = document.querySelector(".box")
let form = document.querySelector(".task-form")

form.addEventListener("submit" , function(){
    event.preventDefault() //prevent page reload on submit
    let input = document.querySelector(".text-input").value 
    let cre = document.createElement("div")
    cre.className = "text-show"

    box.appendChild(cre)

    // adding class inside text-show

    let childleft = document.createElement("div")
    childleft.className = "child-left"

    cre.appendChild(childleft)

    let childlefth1 = document.createElement("span")
    childlefth1.className = "child-left-h1"
    childlefth1.innerHTML = input

    childleft.appendChild(childlefth1)

    let childright = document.createElement("div")
    childright.className = "child-right"

    cre.appendChild(childright)

    let childsubleft = document.createElement("div")
    childsubleft.className = "sub-left"
    childsubleft.classList = "childsubleft"
    childsubleft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#f4f0f0" d="M13.896 3.03a2 2 0 0 1 2.701-.117l.127.117l4.243 4.243a2 2 0 0 1 .117 2.7l-.117.128l-10.314 10.314a2 2 0 0 1-1.238.578L9.239 21H4.006a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-5.233a2 2 0 0 1 .467-1.284l.12-.13L13.895 3.03ZM12.17 7.584l-7.174 7.174V19H9.24l7.174-7.174l-4.243-4.243Zm3.14-3.14L13.584 6.17l4.243 4.243l1.726-1.726z"/></g></svg>`

    let flag = true
    let newinput = document.createElement("input")

        childsubleft.addEventListener("click" , function(){

            if(flag){
                
                newinput.placeholder = `Edit task`
                newinput.className = "new-input"
                childleft.appendChild(newinput)
                childlefth1.remove()
    
                childsubleft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#fbf5f5" d="m9.55 17.308l-4.97-4.97l.714-.713l4.256 4.256l9.156-9.156l.713.714z"/></svg>`

                flag = false
            }
            else{
                let newinputValue = document.querySelector(".new-input").value

                childlefth1.innerHTML = newinputValue
                childleft.appendChild(childlefth1)

                newinput.remove()
                
                 childsubleft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#f4f0f0" d="M13.896 3.03a2 2 0 0 1 2.701-.117l.127.117l4.243 4.243a2 2 0 0 1 .117 2.7l-.117.128l-10.314 10.314a2 2 0 0 1-1.238.578L9.239 21H4.006a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-5.233a2 2 0 0 1 .467-1.284l.12-.13L13.895 3.03ZM12.17 7.584l-7.174 7.174V19H9.24l7.174-7.174l-4.243-4.243Zm3.14-3.14L13.584 6.17l4.243 4.243l1.726-1.726z"/></g></svg>`

                 flag = true
            }

        })

    childright.appendChild(childsubleft)

    let childsubright = document.createElement("div")
    childsubright.className = "sub-right"
    childsubright.classList = "childsubright"
    childsubright.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#fbf5f5" d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144M7 6v13z"/></svg>`

    childright.appendChild(childsubright)

    childsubright.addEventListener("click" , function(){
        cre.remove()
    })
    
})