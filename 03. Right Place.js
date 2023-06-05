function getString(string1, symbol, string2){
    let newString = string1.replace('_', symbol);
    if(newString == string2){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}
getString("Str_ng",
    "I",
    "Strong")