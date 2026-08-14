const EventEmitter=require("events");
//console.log(events);
//EventEmitter emitter=new EventEmitter();
let emitter=new EventEmitter();

//Raise, Handle


emitter.on("customMessage",(data)=>{
    console.log("Event HAndled...",data)
})

emitter.emit("customMessage",{name:"abc",age:10});
