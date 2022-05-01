let EventEmitter = require('events');
let event = new EventEmitter();
event.on('start',()=>{
    console.log("start")
})
event.on('end',()=>{
    console.log("ended")
})
event.on('start',()=>{
    console.log("started the 2nd event")
})
event.on('action',(data)=>{
    console.log(data)
})
event.emit('action', 'this is my data');
event.removeAllListeners('start')
event.emit('start')