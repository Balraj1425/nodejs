let request = require('request');
const initial = () => {
    return new Promise((resolve, reject)=>{
        request.get("http://localhost:3001/menu",(err, res)=>{
            if(err){
                reject(err) // return err 
            }else{
                resolve(res.body) // return the data
            }
        })
    } )
}
const main = () => {
    const initialinstance = initial();
    initialinstance.then(result=>{
        console.log(result)
    }, err=>{
        console.log(err)
    })
}
main();