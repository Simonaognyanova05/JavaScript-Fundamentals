function getSum(num1, num2, num3){
    let sum = num1 + num2 + num3;
    if(sum % 1 != 0){
        console.log(`${sum} - Float`)
    }else{
        console.log(`${sum} - Integer`)
    }
}
