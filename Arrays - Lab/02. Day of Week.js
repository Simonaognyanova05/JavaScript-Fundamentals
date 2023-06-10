function getDays(nums){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if(nums <= days.length && nums > 0){
        console.log(days[nums - 1]);
    }
    else{
        console.log("Invalid day!");
    }
}