function getReversedArr(arr){
    let sum = 0;
    for(let el of arr){
        let newEl = Number(el);
        if(el % 2 == 0){
            sum += newEl;
        }
        else{
            sum = sum;
        }
    }
    console.log(sum);
}