function solve(input){
    let text = input[0];
    let paterrn = /([#|\|])(?<item>[A-Za-z\s]+)\1(?<bestBefore>\d{2}\/\d{2}\/\d{2})\1(?<nutrition>\d+)\1/gm;
    let match = paterrn.exec(text);
    let calories = 0;
    while(match != null){
        calories += Number(match.groups['nutrition']);
        match = paterrn.exec(text);
    }
    let days = calories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    match = paterrn.exec(text);
    while(match != null){
        calories += Number(match.groups['nutrition']);
        
        console.log(`Item: ${match.groups['item']}, Best before: ${match.groups['bestBefore']}, Nutrition: ${match.groups['nutrition']}`)
        match = paterrn.exec(text);
    }
    
    
 }