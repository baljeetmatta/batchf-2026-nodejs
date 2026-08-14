// os, fs, path, http,events

// const os=require("os");
// //console.log(x);

// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.arch());

const fs=require("fs");
// const files= fs.readdirSync(__dirname);
// console.log(files);
fs.readdir("./data",(err,result)=>{
    if(err)
        console.log("Error in reading dir")
    else
console.log(result);

})


fs.readFile("./script.js","utf-8",(err,data)=>{
    console.log(data);

})

