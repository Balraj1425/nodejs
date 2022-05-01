let counter = 0;
const func = setInterval(()=>{
    console.log("test interval")
    counter++
    if (counter == 10){
        clearInterval(func)
    }
},1000)