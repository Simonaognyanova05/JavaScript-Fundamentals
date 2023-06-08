function solve(input){
    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/gm;
    let match = pattern.exec(input);
    let arr = [];
    while(match != null){
      arr.push(match.groups['location']);
      match = pattern.exec(input);
    }
    let points = 0;
    console.log(`Destinations: ${arr.join(", ")}`);
  
    for(let el of arr){
      points += Number(el.length);
    }
    console.log(`Travel Points: ${points}`);
  }