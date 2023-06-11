function solve(arr){
    let accArr = {};
    for(let line of arr){
        let [name,address] = line.split(":");
        accArr[name] = address;
    }
    let entires = Object.entries(accArr);
    entires.sort((a,b) => {
        keyA = a[0];
        keyB = b[0];
        return keyA.localeCompare(keyB);

    });
    for(let [name, address] of entires){
        console.log(name, "->" , address)

    }
}