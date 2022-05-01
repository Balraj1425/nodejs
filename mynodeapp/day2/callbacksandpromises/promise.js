let counter = "cricket";
const myPromise = new Promise((resolve, reject)=>{
    if(counter == "cricket"){

        resolve();
    }else{
        reject();
    }
    
} )
myPromise.then(()=>{
    console.log("my best friend")
}).catch(()=>{
    console.log("my enemy")
})