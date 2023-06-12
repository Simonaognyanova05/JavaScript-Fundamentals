function solve(str) {
    let arr = [];
    let currWords = str[0];
    for(let i = 1;  i < str.length; i++){
        if(str[i].toUpperCase() !== str[i]){
            currWords = currWords.concat(str[i]);
        }else{
            arr.push(currWords);
            currWords = str[i];
        }
    }
    arr.push(currWords);
    console.log(arr.join(", "))
}