function solve(input){
    let text = input.shift();
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let br = 0;
    let result = [];
    while(match != null){
        br++;
        let word1 = match[2];
        let word2 = match[3];
        let reversed = word2.split("").reverse().join("");

        if(word1 === reversed){
            result.push(`${word1} <=> ${word2}`);
        }
        match = pattern.exec(text);
    }
    if(br == 0){
        console.log("No word pairs found!");
    }else{
        console.log(`${br} word pairs found!`);

    }

    if(result.length === 0){
        console.log('No mirror words!');

    }else{
        console.log('The mirror words are:');
        console.log(result.join(', '));
    }
}