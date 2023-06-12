function solve(arr) {
    let arrayWithElements = arr.shift().split(" ").map(Number);
    
    for(let command of arr){
        let currCommand = command.split(" ")
        if(currCommand[0] === "swap"){
            let firstIndex = Number(currCommand[1]);
            let lastIndex = Number(currCommand[2]);
            let temp = arrayWithElements[firstIndex];
            arrayWithElements[firstIndex] = arrayWithElements[lastIndex];
            arrayWithElements[lastIndex] = temp;
        }else if(currCommand[0] === "multiply"){
            let firstIndex = Number(currCommand[1]);
            let secondIndex = Number(currCommand[2]);
            let multiplying = arrayWithElements[firstIndex] * arrayWithElements[secondIndex];
            arrayWithElements[firstIndex] = multiplying; 
        }else if(currCommand[0] === "decrease"){
            arrayWithElements = arrayWithElements.map(x => x - 1);
        }
    }
    console.log(arrayWithElements.join(", "));
}