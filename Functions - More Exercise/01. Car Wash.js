function solve(arr){
    let value = 0;
    for(let el of arr){
        if(el == "soap"){
            value += 0.1;
        }
        if(el == "water"){
            value += value * 0.2;
        }
        if(el == "vacuum cleaner"){
            value += value * 0.25;
        }if(el == "mud"){
            value -= value * 0.1;
        }
    }
    let result = value * 100;
    console.log(`The car is ${result.toFixed(2)}% clean.`)
}