function solve(arr){
    let result = new Map();
    for(let line of arr){
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if(!result.has(name)){
            result.set(name, []);
        }
        let exicting = result.get(name);
        for(let grade of grades){
            exicting.push(grade);
        }
    }   
    let sorted = Array.from(result);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));

    for(let [name, grades] of sorted){
        let avg = 0;
        for(let grade of grades){
            avg += Number(grade);
        }
        avg /= grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}