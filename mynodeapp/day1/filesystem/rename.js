let fs = require('fs');
fs.rename("data1.txt", "data2.txt", function (err){
    if(err){
        console.log("error")
    } else {
        console.log("rename successfull")
    }
})

