const express=require("express");
const fs=require("fs");
const app=express();
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));

app.post("/signup",(req,res)=>{
    //Users.json ->array of objects
    //1. Existing records, 2. Username 3. Array 4. File write
    fs.readFile("./users.json","utf-8",(err,data)=>{
        let users=[];
        if(err)
            users=[];
        else
            users=JSON.parse(data);

        let results=users.filter((item)=>{
            if(item.username==req.body.username)
                return true;
        })
        if(results.length!=0)
            res.send("User Already exists");
else{
        users.push({
            name:req.body.name,
            username:req.body.username,
            password:req.body.password
        });
        fs.writeFile("./users.json",JSON.stringify(users),(err)=>{
            res.send("USer Created successfully")
        })
        
    }

    })
})

app.post("/login",(req,res)=>{

    fs.readFile("./users.json","utf-8",(err,data)=>{
let users=[];
if(err)
    users=[];
else
    users=JSON.parse(data);

let result=users.filter((item)=>{
    if(item.username==req.body.username && item.password==req.body.password)
        return true;

})
if(result.length==0)
    res.send("Invalid user/passwoprd");
else
    res.send("Welcom user");


    })

})

app.listen(5000,(err)=>{

    console.log("Server Started....")
})