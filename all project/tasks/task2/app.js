
var arr = [3, 6, 2, 56, 32, 5, 89, 100];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
  hTag = document.createElement("h1")
  const textNode = document.createTextNode(largest);
  hTag.appendChild(textNode);
  document.body.appendChild(hTag)

// let arr = [4,5,6,7,8];

// let largest = Math.max(...arr)

// hTag = document.createElement("h1")
//    const textNode = document.createTextNode(largest);
//    hTag.appendChild(textNode);
//    document.body.appendChild(hTag)