function solve(arr){
    let accArr = {};
    for(let el of arr){
        let [day, name] = el.split(" ");
        if(accArr.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            console.log(`Scheduled for ${day}`);
            accArr[day] = name;
        }

    }
    for(let day in accArr){
        console.log(day, "->", accArr[day]);
    }

}