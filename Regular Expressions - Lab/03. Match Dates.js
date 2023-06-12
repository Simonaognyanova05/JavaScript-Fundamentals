function solve(input){
    let text = input[0];
    let pattern = /(?<day>\d{2})([ |\/|\-|\.])(?<month>\w{3})\2(?<year>\d{4})/gm;
    let match = pattern.exec(text);

    while(match != null){
        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        match = pattern.exec(text);
    }
}