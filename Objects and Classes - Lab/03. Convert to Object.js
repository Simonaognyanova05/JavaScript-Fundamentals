function solve(jsonFormat){
    let object = JSON.parse(jsonFormat);
    for(let el of Object.keys(object)){
        console.log(`${el}: ${object[el]}`);

    }
}