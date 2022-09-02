// const {add,sub, mul,div} = require("./Arithmetic");
const inputElement = document.querySelector(".firstInput");
const inputElement2 = document.querySelector(".secondInput");
const btnElement = document.querySelector(".btn");
const pTag = document.querySelector(".pTag");
const pTag2 = document.querySelector(".error");
const selector = document.querySelector("#sum-option")
let answer = ["",""];


inputElement.addEventListener("keyup",function(){
    answer[0] = parseFloat(inputElement.value) 
});
inputElement2.addEventListener("keyup",function(){
    answer[1] = parseFloat(inputElement2.value) 
});
btnElement.addEventListener("click", function(){
    //const ans = answer[0] + answer[1]
    
     if (isNaN(answer[0])) {
        pTag2.innerHTML = "First Value is not a number"
        setTimeout(()=>{
            pTag2.innerHTML = ""        
        },3000)
        return;
     }
     if (isNaN(answer[1])) {
        pTag2.innerHTML = "Second Value is not a number"
        setTimeout(()=>{
            pTag2.innerHTML = ""
        },3000)
        
        return;
     }
     //pTag.innerHTML = ans

     switch (selector.value) {
        case "+":
            pTag.innerHTML = answer[0] + answer[1]
            break;
        case"-" :
            pTag.innerHTML = answer[0] - answer[1]
            break;
        case "*":
            pTag.innerHTML = answer[0] * answer[1]
            break;
        case "/":
            pTag.innerHTML = answer[0] / answer[1]
            break;
        default:
            setTimeout(function () {
                pTag2.innerHTML = "Invalid selector"
            },3000)
            
            break;
     }
     
})