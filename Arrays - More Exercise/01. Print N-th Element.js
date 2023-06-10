function solve(arr){
    let num = Number(arr[arr.length - 1]);
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i+=num){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}
