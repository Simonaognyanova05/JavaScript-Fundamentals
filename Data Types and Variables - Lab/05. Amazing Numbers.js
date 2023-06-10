function getSumOfDigit(num){
    num = num.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    sum.toString()
    let a = "";
    if(sum % 10 == 9){
        a = 'True';
        console.log(`${num} Amazing? ${a}`)
    }else{
        a = 'False';
        console.log(`${num} Amazing? ${a}`)
    }
}
