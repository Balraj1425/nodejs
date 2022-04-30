let fs = require('fs')
let str = "this is additional text";
fs.appendFile("data2.txt", str, function (err){
    if(err){
        console.log("error")
    } else {
        console.log("data appended")
    }
})