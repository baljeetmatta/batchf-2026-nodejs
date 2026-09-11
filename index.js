const express=require("express");
const fs=require("fs");
const app=express();
const mys=require("express-session");//function
const path=require("path")
const cors=require("cors");//function

const uRoutes=require("./routing/userRoutes");

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
// /dashboard->/user/dashboard /profile ->/user/profile
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
app.use(mys({
    secret:"ASDAD#$!!",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60
    }
}))
app.use("/user",auth,uRoutes);



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
{
    req.session.name=result[0].name;

res.redirect("/dashboard")
}

    })

})



app.post("/loginReact",(req,res)=>{

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
    res.json({success:false,message:"Invalid user/password"});

else
{
    req.session.name=result[0].name;

    res.json({success:true,message:"Welcome"});

}

    })

})
// app.get("/dashboard",(req,res)=>{
//     if(req.session.name)
//     res.send("Welcome "+req.session.name);
// else
// res.redirect("/login")
//     //res.sendFile(path.join(__dirname,"./login.html"));


// })
// app.get("/profile",(req,res)=>{
//     if(req.session.name)
//     res.send("Profile Page");
// else

//     res.redirect("/login")

// })

// app.get("/dashboard",auth,(req,res)=>{
//     res.send("Welcome "+req.session.name)
// })
// app.get("/profile",auth,(req,res)=>{
//     res.send("Profile Page "+req.session.name)
// })
function auth(req,res,next)
{
    if(req.session.name)
        next();
    else
        res.redirect("/login");

}


app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./login.html"));
})

app.listen(5000,(err)=>{

    console.log("Server Started....")
})