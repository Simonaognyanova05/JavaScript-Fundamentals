function solve(input) {
    let string = input.shift();
    let digitPattern = /[0-9]/gm;
    let pattern = /(:{2}|\*{2})(?<text>[A-Z][a-z]{2,})(\1)/gm;
    let matchOfDigit = digitPattern.exec(string);
    let match = pattern.exec(string);
    let threshold = 1;
    let arrWithout = [];
    let arr = [];
    while(matchOfDigit != null){
        threshold *= matchOfDigit[0];
        matchOfDigit = digitPattern.exec(string);
    }
    let br = 0;
    while(match != null){
        for(let el of match.groups['text']){
            br += el.charCodeAt();
        }
        arrWithout.push(match[0]);
        if(br >= threshold){
            arr.push(match[0]);
        }
        br = 0;
        match = pattern.exec(string);
    }

    console.log(`Cool threshold: ${threshold}`)
    console.log(`${arrWithout.length} emojis found in the text. The cool ones are: `)
    console.log(arr.join("\n"));
}