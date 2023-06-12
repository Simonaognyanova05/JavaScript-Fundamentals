function solve(input){
    let oldPassword = input.shift();
    let arr = [];
    for(let el of input){
        el = el.split(" ");
        if(el[0] === "TakeOdd"){
            for(let i = 1; i <= oldPassword.length; i+=2){
                arr.push(oldPassword[Number(i)]);
            }
            oldPassword = arr.join("").toString();
            console.log(oldPassword);
        }else if(el[0] === "Cut"){
                let index = Number(el[1]);
                let length = Number(el[2]);

                let string = oldPassword.substring(index, index + length);
                oldPassword = oldPassword.replace(string, '');
                console.log(oldPassword);
                
        }else if(el[0] === "Substitute"){
            if(oldPassword.includes(el[1])){
                oldPassword = oldPassword.split(el[1]);
                oldPassword = oldPassword.join(el[2]);
                console.log(oldPassword);
            }else{
                console.log("Nothing to replace!");
            }
        }else if(el[0] === "Done"){
            console.log(`Your password is: ${oldPassword}`);
        }
    }
}