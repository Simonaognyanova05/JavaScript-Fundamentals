function pointsValidation(arr) {
    let shiftedNum = Number(arr.shift());
    let poppedNum = Number(arr.pop());
    let sum = shiftedNum + poppedNum;
    console.log(sum);
}