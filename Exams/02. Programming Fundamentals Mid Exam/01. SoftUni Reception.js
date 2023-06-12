function solve(arr) {
    arr = arr.map(Number);
    let studentsForOneHour = arr[0] + arr[1] + arr[2];
    let studentsCount = arr[3];
    let hours = 0;
    while(studentsCount > 0){
        studentsCount -= studentsForOneHour;
        hours++;
        while(hours % 4 === 0){
            hours += 1;
        }
    }
    
    console.log(`Time needed: ${hours}h.`);

}