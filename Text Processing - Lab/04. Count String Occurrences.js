function solve(input, subStr) {
    let br = 0;
    while(input.includes(subStr)){
        br++;
        input = input.replace(subStr, "");
    }
    console.log(br)
}