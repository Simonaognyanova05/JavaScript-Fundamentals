function solve(subStr, str) {
    let newSubStr = subStr.split(", ");
    for(let word of newSubStr){
        str = str.replace("*".repeat(word.length), word);
    }
    console.log(str)
}
 