function solve(arr) {
    let num = arr[arr.length - 1];
    arr.pop();
    for(let i = 1; i <= num; i++){
        let num1 = arr.pop();
        arr.unshift(num1);

    }
    console.log(arr.join(" "));
}