function solve(arr){
    let secondArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'add'){
            secondArr.push(i + 1);
        }else{
            secondArr.pop(i - 1);
        }
    }
    if(secondArr.length <= 0){
        console.log("Empty");
    }else{
        console.log(secondArr.join(" "));
    }
}