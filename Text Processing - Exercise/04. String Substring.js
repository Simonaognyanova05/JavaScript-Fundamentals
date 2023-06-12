function solve(word, str) {
    str = str.split(" ");
    for(let el of str){
        if(word.toLowerCase() === el.toLowerCase()){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);

}