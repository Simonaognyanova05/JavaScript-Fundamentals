function solve(arr){
    let numOfSongs = arr.shift();
    let typeOfSong = arr.pop();
    for(let i = 0; i < numOfSongs; i++){
        let songs = arr[i].split("_");
        if(songs[0] === typeOfSong){
            console.log(songs[1]);
        }else if(typeOfSong === "all"){
            console.log(songs[1]);
        }
    }
}