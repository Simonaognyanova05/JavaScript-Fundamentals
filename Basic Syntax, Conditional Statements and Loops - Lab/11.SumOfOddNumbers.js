function getNum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0){
            n++
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum: " + sum);
}
getNum(8);