// const result = document.querySelector('#result');

// let saveArr = [];
// saveArr = result;

//create a function
function indexOf(arr){
    //create an if statemnt
    if(arr[0] === arr[arr.length -1]){
        return true
    } else {
        return false
    }
}
//append in html
const newh1 = document.createElement('h1');
 newh1.innerHTML = indexOf([23,24,24,32,43,54,23]);
 document.body.appendChild(newh1)
// // call the function

// console.log(indexOf(savedArr));





// myArr =[23,24,24,35,2343, 67]
// function same() {
//     // for (let i = 0; i < myArr.length; i++) {
//         if (myArr[0]===myArr[5]) {
//             return true
//         }else{
//             return false
//         }
//     }  
// //}


