let fs = require('fs');
fs.unlink("data2.txt", function (err){
    if(err){
        console.log("error")
    }else{
        console.log("file deleted")
    }
})