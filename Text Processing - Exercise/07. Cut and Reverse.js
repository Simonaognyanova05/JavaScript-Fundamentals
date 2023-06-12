function solve(str) {
    let newStr = str.substring(0, str.length / 2);
    let newStr1 = str.substring(str.length / 2, str.length);

    console.log(newStr.split("").reverse().join(""));
    console.log(newStr1.split("").reverse().join(""));

}