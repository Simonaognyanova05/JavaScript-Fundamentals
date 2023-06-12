function solve(integers) {
    let arr = integers.split(" ").map(Number);
    let sum = arr.reduce((a, b) => a + b);
    let average = sum / arr.length;
    arr = arr.filter(x => x > average);
    
    
    arr = arr.sort((a,b) => b - a);
    arr = arr.splice(0,5);
    if(arr.length === 0){
        console.log("No");
    }
    console.log(arr.join(" "));

}