function solve(str) {
    let unique = "";
    for(let i = 0; i < str.length; i++){
        let currChar = str.charAt(i);
        let newxtChar = str.charAt(i + 1);
        if(currChar !== newxtChar){
            unique += currChar;
        }
    }
    console.log(unique);
}