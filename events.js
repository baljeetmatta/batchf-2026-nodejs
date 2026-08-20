const EventEmitter=require("events");
// const emitter=new EventEmitter();

// function logger(message)
// {
//     console.log(message);
//     emitter.emit("done");
//  }
//  module.exports.logger=logger;
//  module.exports.emitter=emitter;


class LoggerClass extends EventEmitter
{
     logger(message)
    {
        console.log(message);
        //this.test();
        this.emit("done");


    }
    // test()
    // {

    // }
}

module.exports=LoggerClass;
