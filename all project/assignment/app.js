const hTag = document.querySelector("div")

let text = "" ;
for (let i = 0; i <= 100 ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        text += `fizzbuzz <br>`
        hTag.innerHTML = text
    }else if (i % 3 === 0) {
        text +=`fizz <br>`
        hTag.innerHTML = text;
    }else if (i % 5 === 0) {
        text += `buzz <br>`
        hTag.innerHTML = text;
    } else {
        text += `${i}<br>`
        hTag.innerHTML = text
    }
}