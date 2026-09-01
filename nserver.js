const express=require("express");
const path=require("path")
//http module
//createServer->callback ->(req,res)
const app=express();
//const server=http.createServer
//MIDDLEWARE 
//static -> static files folder
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
//false -> post ->simple variable=value&variable=value
//file, post user[name]=value&user[passw]=values


app.get("/",(req,res)=>{

    // res.write("welcome to express ");
    // res.end();
  //  res.send("Welcome to Server.")
//Absolute -> /users/baljeet/desktop
//Relative "./index.html"
//__dirname ->current directory
//currentfile path ->Relative
  //res.sendFile(path.join (__dirname,"./home.html"));
res.send("welcom to server")
})



app.get("/getData",(req,res)=>{
    console.log(req.query);
    res.end();

})

app.post("/getData",(req,res)=>{
    console.log(req.body);
    res.end();

})

app.listen(5000,(err)=>{

    if(!err)
        console.log("Server started...")
})
