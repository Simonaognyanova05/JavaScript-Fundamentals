function getNum(num, num1, num2){
    if(num > num1 && num > num2){
        console.log(num);
    }else if(num1 > num && num1 > num2){
        console.log(num1);
    }else if(num2 > num1 && num2 > num){
        console.log(num2);
    }else{
        console.log(num);
    }
}