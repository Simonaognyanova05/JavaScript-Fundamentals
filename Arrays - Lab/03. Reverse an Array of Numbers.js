function getReversedArr(num, arr){
    let newArr = [];
    for(let i = 0; i < num; i++){
        newArr.push(arr[i]);
    }
    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}