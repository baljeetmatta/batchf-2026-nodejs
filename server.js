const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Client Request...")
    console.log(req.url);
    
    res.setHeader("content-type","text/html");
    if(req.url=="/")
    {
    res.write("Welcome to <b>Server</b>...")
    res.end();
    }
    else if (req.url=="/about.html")
    {
        res.write("About us page...")
    res.end();
    }
    else{
        res.end();
        
    }

});
// server.on("connection",(socket)=>{
//     console.log("Client Request Received...")
// })

server.listen(5000,(err)=>{

    if(err)
        console.log(err);
    else
        console.log("Server Started...")
});

