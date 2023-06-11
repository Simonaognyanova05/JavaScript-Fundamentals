function solve(arr) {
    let newArr = arr.filter((x, i) => i % 2 === 1);
    let newArr1 = newArr.map(x => x * 2);
    newArr1.reverse();

    console.log(newArr1.join(" "))
}