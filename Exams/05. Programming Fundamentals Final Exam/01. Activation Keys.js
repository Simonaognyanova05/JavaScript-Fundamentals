function solve(input) {
    let string = input.shift();
    for(let el of input){
        el = el.split(">>>");
        if(el[0] === "Slice"){
            let firstString = string.slice(0, Number(el[1]));
            let secondString = string.slice(Number(el[2]));
            string = firstString + secondString;
            console.log(string);
        }else if(el[0] === "Contains"){
            if(string.includes(el[1])){
                console.log(`${string} contains ${el[1]}`);
            }else{
                console.log('Substring not found!')
            }
        }else if(el[0] === "Flip"){
            let firstString = string.slice(0, Number(el[2]));
            let secondString = string.slice(Number(el[3]));
            let upperOrLower = string.slice(Number(el[2]), Number(el[3]));
            if(el[1] === "Upper"){
                upperOrLower = upperOrLower.toUpperCase();
            }else if(el[1] === "Lower"){
                upperOrLower = upperOrLower.toLowerCase();
            }
            string = firstString + upperOrLower + secondString;
            console.log(string)
        }else if(el[0] === "Generate"){
            console.log(`Your activation key is: ${string}`);
        }
    }    
}function solve(input) {
    let string = input.shift();
    for(let el of input){
        el = el.split(">>>");
        if(el[0] === "Slice"){
            let firstString = string.slice(0, Number(el[1]));
            let secondString = string.slice(Number(el[2]));
            string = firstString + secondString;
            console.log(string);
        }else if(el[0] === "Contains"){
            if(string.includes(el[1])){
                console.log(`${string} contains ${el[1]}`);
            }else{
                console.log('Substring not found!')
            }
        }else if(el[0] === "Flip"){
            let firstString = string.slice(0, Number(el[2]));
            let secondString = string.slice(Number(el[3]));
            let upperOrLower = string.slice(Number(el[2]), Number(el[3]));
            if(el[1] === "Upper"){
                upperOrLower = upperOrLower.toUpperCase();
            }else if(el[1] === "Lower"){
                upperOrLower = upperOrLower.toLowerCase();
            }
            string = firstString + upperOrLower + secondString;
            console.log(string)
        }else if(el[0] === "Generate"){
            console.log(`Your activation key is: ${string}`);
        }
    }    
}