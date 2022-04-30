
let got = require('got');
got.get("http://localhost:3001/menu", {responseType: "json"}).then(res=>{
    console.log(res.body)
}).catch(err=>{
    console.log("error occured")
})