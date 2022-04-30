let fs = require('fs');
//this is for async read file function
fs.readFile("data.txt", 'utf-8', function(err, data){
    if(err){
        console.log("unable to read");
    } else {
        console.log(data);
    }
})

//write file
fs.readFile("data.txt", 'utf-8', function(err, data){
    if(err){
        console.log("unable to read");
    } else {
        console.log(data);
        fs.writeFile("data1.txt", data, function (err) {
            if (err){
                console.log("error occured")
            }
        })
    }
})