function solve(input){
    let pattern = /((?<=\s)[a-zA-Z0-9]+([-.]\w*)*@[a-zA-Z]+?([.-][a-zA-Z]*)*(\.[a-z]{2,}))/gm;
    let match = pattern.exec(input);
    while(match!=null){
        console.log(match[0]);
        match = pattern.exec(input)
    }
}