let request = require ('request');
request.get("http://localhost:3001/menu",(err,res)=>{
    if (err){
        console.log("error")
    }else{
        console.log(res.body)
    }
})