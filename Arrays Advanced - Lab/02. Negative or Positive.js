function pointsValidation(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let newEl = Number(arr[i]);
        if(newEl < 0){
            newArr.unshift(newEl)
        }else{
            newArr.push(newEl)
        }
    }
    for(let i = 0; i < newArr.length; i++){
        console.log(newArr[i]);
    }
}