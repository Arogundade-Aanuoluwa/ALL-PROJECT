const {errors} = require("./Arithmetic");

    // create the function of addition
   function add(a,b){
    // if (isNaN(a) || isNaN(b) ) {
    //     console.log("Error put a value");
    // }else{
       
    //}       
    return a + b;
    }
    //create the function of subtraction
    function sub(a,b){
        // if (isNaN(a) || isNaN(b) ) {
        //     console.log("Error put a value");
        // }else{
            
        //}
        return a - b
    }
    //create the function of multiplication
    function mul(a,b){
        // if (isNaN(a) || isNaN(b) ) {
        //     console.log("Error put a value");
        // }else{
        
       
        // }
        return a * b
    }
    //create the function of dividon
    function div(a,b){
        //if (isNaN(a) || isNaN(b) ) {
            //console.log("Error put a value");
       // }else{
        
       // }
       return a / b
    }
    //pass the function as an object

    module.exports = { 
        add,sub,mul,div
    } 
