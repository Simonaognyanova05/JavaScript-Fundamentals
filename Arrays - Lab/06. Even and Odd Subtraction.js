function getReversedArr(arr){
    let sumOdd = 0;
    let sumEven = 0;
    for(let el of arr){
        if(el % 2 == 0){
            sumEven += el;
        }else if(el % 2 != 0){
            sumOdd += el;
        }
    }
    console.log(sumEven - sumOdd);

}