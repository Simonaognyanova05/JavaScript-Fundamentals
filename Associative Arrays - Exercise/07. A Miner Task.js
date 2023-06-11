function solve(input){
    let product = new Map;
    for(let i = 0; i < input.length; i+=2){
        if(product.has(input[i])){
            let quality = product.get(input[i]);
            product.set(input[i], quality += Number(input[i + 1]))
        }else{
            
            product.set(input[i], Number(input[i + 1]))
        }
    }
    for(let [key, value] of product){
        console.log(key, "->", value)
    }
}