function solve(str) {
    let newStr = str.split(" ");
    for(let el of newStr){
        if(el.startsWith("#") && el.length > 1){
            let asciiCode = el.charCodeAt(1);
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122);
            if(isLetter){
                console.log(el.substring(1));
            }
        }
    }
}