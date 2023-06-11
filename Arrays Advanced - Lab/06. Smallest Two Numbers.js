function solve(arr) {
    let newArr = arr.sort((a,b) => a - b);
    let el1 = newArr.shift();
    let el2 = newArr.shift();

    console.log(el1, el2);

}