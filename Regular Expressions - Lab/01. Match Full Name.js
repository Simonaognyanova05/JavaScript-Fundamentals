function solve(names){
    let pattern = /(\b[A-Z][a-z]+) ([A-Z][a-z]+\b)/g;
    let validNames = [];
    while((validName = pattern.exec(names))!== null){
        validNames.push(validName[0]);
    }
    console.log(validNames.join(" "))
}
 