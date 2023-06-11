function solve(arr) {
    let numOperation = arr[0];
    arr.shift();
    let newArr = arr.slice(0, numOperation);
    let newArr1 = arr.slice(-numOperation);

    console.log(newArr.join(" "));
    console.log(newArr1.join(" "));

}