function solve(input) {
    let n = Number(input.shift());
    let object = {};

    for(let i = 0; i < n; i++){
        let objectData = input.shift().split("|");
        let piece = objectData[0];
        let composer = objectData[1];
        let key = objectData[2];

        object[piece] = {
            composer,
            key
        }
    }
    while(input[0] != "Stop"){
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let piece = tokens[1];
        let composer = tokens[2];
        let key = tokens[3];

        if(command === "Add"){
            if(!object.hasOwnProperty(piece)){
                object[piece] = {
                    composer,
                    key
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }else{
                console.log(`${piece} is already in the collection!`)
            }
        }else if(command === "Remove"){
            if(object.hasOwnProperty(piece)){
                delete object[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else if(command === "ChangeKey"){
            if(object.hasOwnProperty(piece)){
                console.log(`Changed the key of ${piece} to ${composer}!`)
                object[piece].key = composer;
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for(let data of Object.entries(object)){
        let piece = data[0];
        let info = data[1];
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}