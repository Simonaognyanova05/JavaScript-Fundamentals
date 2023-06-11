function solve(arr){
    let accArr = {};
    for(let el of arr){
        let newEl = el.split(" ");
        let name = newEl[0];
        accArr[name] = newEl[1]

    }
    for(let key in accArr){
        console.log(`${key} -> ${accArr[key]}`);
    }
}