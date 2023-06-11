function solve(input){
    let carInParking = new Set();
    for(let line of input){
        let newLine = line.split(", ");
        if(newLine[0] === "IN"){
            carInParking.add(newLine[1]);
        }else if(newLine[0] === "OUT"){
            if(carInParking.has(newLine[1])){
                carInParking.delete(newLine[1]);
            }
        }
    }
    let sorted = Array.from(carInParking).sort();

    if(sorted.size !== 0){
        for (let el of sorted){
            console.log(el);
        }
    }else{
        console.log("Parking Lot is Empty");
    }        
}