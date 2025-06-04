let counter = document.querySelectorAll(".counter")

counter.forEach((element)=>{ //element coz every counter is nodelist has multiple element
    let start = 0
    let data = Number(element.getAttribute("data-count")) //getAttribute & convert string to number
    element.textContent = start

    let a = setInterval(() => {

        if(+element.textContent < data){
          start++;
          element.textContent = start
        }
        if(+element.textContent == data){
          clearInterval(a)
        }

    }, 3)

})