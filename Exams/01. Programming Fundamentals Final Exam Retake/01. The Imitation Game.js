function solve(input){
    let string = input.shift();
    input.pop();
    for(let el of input){
      el = el.split("|");
      if(el[0] === "ChangeAll"){
        while(string.includes(el[1])){
          string = string.replace(el[1], el[2]);
        }
      }else if(el[0] === "Insert"){
        let firstPart = string.slice(0, el[1]);
        let secondPart = string.slice(el[1]);
        string = firstPart + el[2] + secondPart;
      }else if(el[0] === "Move"){
        let substring = string.slice(0, el[1]);
        string = string.slice(el[1]);
        string = string + substring;
      }
    }
    console.log(`The decrypted message is: ${string}`);
  
  }