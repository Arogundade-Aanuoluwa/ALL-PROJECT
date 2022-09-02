const {add,sub, mul,div} = require("./Arithmetic");

try {
console.log(add(9,3)); 
} catch (error) {
    console.log(error)
}
try {
    console.log(sub("e",3)); 
    } catch (error) {
        console.log(error)
    }
    try {
        console.log(mul(9,3)); 
        } catch (error) {
            console.log(error)
        }
        try {
            console.log(div(9,3)); 
            } catch (error) {
                console.log(error)
            }
