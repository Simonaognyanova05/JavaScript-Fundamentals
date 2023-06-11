function solve(input){
    let newInput = input.split(" ");
    let words = {};
    let br = 0;
    for(let word of newInput){
        word = word.toLowerCase();
        if(words.hasOwnProperty(word)){
            words[word]++;
        }else{
            words[word] = 1;
        }
    }
    let filtered = Object.entries(words).filter(([word, count]) => {
        if(count % 2 === 1){
            return true;
        }else{
            return false;
        }
    });
    console.log(filtered.map(entry => entry[0]).join(" "));
}