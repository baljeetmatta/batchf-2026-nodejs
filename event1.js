//const logger=require("./events");
// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// emitter.on("done",()=>{
//     console.log("Task Completed...")
// })
//logger("My Work");
//VERSION 1
// const events=require("./events");


// events.emitter.on("done",()=>{
//     console.log("Task Completed")
// })
// events.logger("My Work");
//VERSION 2

const LoggerClass=require("./events");
const loggerObject=new LoggerClass();
loggerObject.on("done",()=>{

})
loggerObject.logger("My Work");


