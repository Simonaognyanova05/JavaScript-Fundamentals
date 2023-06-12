function solve(input){
    let arrFurnitures = [];
    let totalSum = [];
    for(let el of input){
        let pattern = /\>>(?<name>\w+)\<<(?<price>\d+\.?\d+)\W(?<quantity>\d+)/gm;
        let match = pattern.exec(el);
    
        while(match != null){
            let furnitures = match.groups['name'];
            arrFurnitures.push(furnitures);
            let price = match.groups['price'];
            let quantity = match.groups['quantity'];
            totalSum.push(price * quantity);
            match = pattern.exec(el);
        }
    }
    console.log("Bought furniture:");
    if(arrFurnitures.length > 0){
        console.log(arrFurnitures.join("\n"));
    }
    let mySum = 0;
    for(let sum of totalSum){
        mySum += sum;
    }
    console.log(`Total money spend: ${mySum.toFixed(2)}`);
}