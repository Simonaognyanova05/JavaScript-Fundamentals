function solve(input, subStr) {
    while(input.includes(subStr)){
        input = input.replace(subStr, "*".repeat(subStr.length));
    }
    console.log(input)
}