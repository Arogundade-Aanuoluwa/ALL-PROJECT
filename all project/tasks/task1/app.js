 hTag= document.querySelector("h1")

let text = ""
for (let i = 0; i <= 15; i++) {
    if ( i % 2  == 0){
        text+=`the number ${i} is even`
        hTag.innerHTML = text
    }else{
        text+=`the number${i} is odd`
        hTag.innerHTML = text
    }
}
