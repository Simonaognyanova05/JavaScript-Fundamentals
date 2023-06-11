function solve(arr){
    let result = new Map();
    let br = 0;
    for(let el of arr){
        if(result.has(el)){
            br = result.get(el) + 1;
        }else{
            br = 1;
        }
        result.set(el, br);
    }
    let sorted = Array.from(result);
    sorted.sort((a,b) => b[1] - a[1]);
    
    for(let [word, br] of sorted){
        console.log(`${word} -> ${br} times`)
    }
}