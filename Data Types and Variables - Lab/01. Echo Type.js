function getType(variable){
    if(typeof(variable) === 'string' || typeof(variable) === 'number'){
        console.log(typeof variable);
        console.log(variable);

    }else{
        console.log(typeof variable);
        console.log("Parameter is not suitable for printing");

    }
}
getType("string")