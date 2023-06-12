function solve(array){
    let sentence = array.shift().split("");
    let lowSum = 0;
    let upSum = 0;
    let newArr = [];
    if(array[0] === "LOWERCASE"){
        for(let el of sentence){
            if(el.charCodeAt() >= 97 && el.charCodeAt() <= 122){
                lowSum += el.charCodeAt();
            }
        }
        console.log(`The total sum is: ${lowSum}`);
    }else if(array[0] === "UPPERCASE"){
        for(let el of sentence){
            if(el.charCodeAt() >= 65 && el.charCodeAt() <= 90){
                upSum += el.charCodeAt();
            }
        }
        console.log(`The total sum is: ${upSum}`);
    }
}