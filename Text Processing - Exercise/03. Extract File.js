function solve(str) {
    console.log("File name: " + str.substring(str.lastIndexOf("\\") + 1, str.lastIndexOf(".")));
    console.log("File extension: " + str.substring(str.lastIndexOf(".") + 1));

}