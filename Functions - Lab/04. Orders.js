function solve(product, num) {
    let sum = 0;
    if(product === "coffee"){
        sum += 1.50 * num;
    }else if(product === "water"){
        sum += 1.00 * num;
    }else if(product === "coke"){
        sum += 1.40 * num;
    }else if(product === "snacks"){
        sum += 2.00 * num;
    }
    console.log(sum.toFixed(2))
}