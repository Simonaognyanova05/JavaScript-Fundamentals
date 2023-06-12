function solve(input){
    let destination = input.shift();
    for(let el of input){
      el = el.split(":");
      if(el[0] === "Add Stop"){
        if(Number(el[1]) > -1 && Number(el[1]) < destination.length){
          let firstString = destination.slice(0, Number(el[1]));
          let secondString = destination.slice(Number(el[1]));
          destination = firstString + el[2] + secondString;
        }
        console.log(destination)
      }else if(el[0] === "Remove Stop"){
        if((Number(el[1]) > -1 && Number(el[1]) < destination.length) && (Number(el[2]) > -1 && Number(el[2]) < destination.length)){
          let firstString = destination.substring(0, Number(el[1]));
          let secondString = destination.substring(Number(el[2])+1);
          destination = firstString + secondString;
        }
        console.log(destination)
      }else if(el[0] === "Switch"){
        if(destination.includes(el[1])){
          destination = destination.replace(el[1], el[2]);
  
        }
        console.log(destination)
      }else if(el[0] === "Travel"){
        console.log(`Ready for world tour! Planned stops: ${destination}`);
      }
    }
  }