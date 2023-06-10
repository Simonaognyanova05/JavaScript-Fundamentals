function getAction(num1, num2, process){
    multiply = (x, y) => x * y;
    divide = (x, y) => x / y;
    add = (x, y) => x + y;
    subtract = (x, y) => x - y;
    if(process === "multiply"){
        console.log(multiply(num1, num2));
    }else if(process === "divide"){
        console.log(divide(num1, num2));
    }else if(process === "add"){
        console.log(add(num1, num2));
    }else if(process === "subtract"){
        console.log(subtract(num1, num2));
    }
}