function errors(a,b){
    if (typeof a === "string" ) {
        throw new Error(`${a} is not a number: Enter a number`)
    }    
    if (typeof b === "string") {
        throw new Error(`${b}is not a number: Enter a number`)
    }
    }
export{errors}