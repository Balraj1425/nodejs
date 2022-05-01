let http = require('http')
let fs = require('fs')
let url = require('url')

http.createServer((req, res) => {
    if(req.url === "/foodmenu" && req.method === "GET") {
        fs.readFile("foodmenu.json", "utf-8", function(err, data){
            if(err){
                console.log("unable to read");
            } else {
                console.log(data);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(data);
                res.end();
            }
        })
    } else if(req.url === "/drinkmenu" && req.method === "GET"){
        fs.readFile("drinksmenu.json", "utf-8", function(err, data){
            if(err){
                console.log("unable to read");
            } else {
                console.log(data);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(data);
                res.end();
            }
        })
    } else if(req.url === "/sunset" && req.method === "GET"){
        fs.readFile("drinksmenu.json", "utf-8", function(err, data){
            if(err){
                console.log("unable to read");
            } else {
                data = JSON.parse(data);
                console.log(typeof(data));
                for (let i of Object.keys(data)){                    
                    // console.log(data[i])
                    for (let j=0; j< data[i].length; j++){
                        // console.log(data[i][j].drinkName)
                        if(data[i][j].drinkName == "sunset"){
                            console.log(data[i][j])
                        }
                        
                    }
                }
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(data));
                res.end();
            }
        })
    } else if(req.method === "GET"){
        let q = url.parse(req.url, true).query;
        console.log(q.name)
        fs.readFile("drinksmenu.json", "utf-8", function(err, data){
            if(err){
                console.log("unable to read");
            } else {
                data = JSON.parse(data);
                console.log(typeof(data));
                for (let i of Object.keys(data)){                    
                    // console.log(data[i])
                    for (let j=0; j< data[i].length; j++){
                        // console.log(data[i][j].drinkName)
                        if(data[i][j].drinkName == q.name){
                            console.log(data[i][j])
                            res.writeHead(200, {'Content-Type': 'application/json'});
                            res.write(JSON.stringify(data[i][j]));
                            res.end();
                        }
                        
                    }
                }
                
            }
        })
    }
    else {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(" req not supported")
    }
 }).listen(3002)
 console.log("server started at http://localhost:3002")