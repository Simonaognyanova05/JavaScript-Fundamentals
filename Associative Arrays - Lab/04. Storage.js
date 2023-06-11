function solve(arr){
    let map = new Map();
    for(let line of arr){
        let newLine = line.split(" ");
        if(map.has(newLine[0])){
            let excisting = map.get(newLine[0]);
            let smth = Number(newLine[1]);
            map.set(newLine[0], smth + Number(excisting));

        }else{
            map.set(newLine[0], newLine[1])
        }
    }    
    for(let [key, value] of map){
        console.log(key, '->', value)
    }
}