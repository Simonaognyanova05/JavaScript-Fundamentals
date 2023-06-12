function solve(input){
    let racers = {};
    let names = input.shift().split(", ");
    for(const line of input){
        if(line !== "end of race"){
            let racerName = line.match(/[A-Z]+/gi).join("");
            let distanceDigit = line.match(/\d/g);
            let distance = 0;
            for(let meter of distanceDigit){
                distance += +meter;
            }
            if(names.includes(racerName)){
                if(racers.hasOwnProperty(racerName)){
                    racers[racerName] += distance;
                }else{
                    racers[racerName] = distance;
                }
            }
        }
    }
    let sortedArr = Object.keys(racers).sort((a,b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedArr[0]}`);
    console.log(`2nd place: ${sortedArr[1]}`);
    console.log(`3rd place: ${sortedArr[2]}`);
}