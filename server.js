const http = require("http");
const fs = require("fs");
const url = require("url")

const server = http.createServer(handleServer);

function handleServer(req, res) {

    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl)

    let file = true;
    let filename = parsedUrl.pathname//req.url;// /style.css, /index.html
    if (parsedUrl.pathname == "/")
        filename = "/index.html";
    else if (parsedUrl.pathname == "/getData" && req.method == "GET") {
        file = false;
        console.log(parsedUrl.query.username);
        res.write(`Welcome ${parsedUrl.query.username}`);
        res.end();


    }
    else if (parsedUrl.pathname == "/getData" && req.method == "POST") {
        file = false;
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            console.log(body);
            const data=new URLSearchParams(body);
            //data.get(variable)
            console.log(data.get("username"));
            res.write(`Welcome ${data.get("username")}`)
            res.end();

        })


    }

    if (file)
        fs.readFile("." + filename, "utf-8", (err, data) => {
            if (err)
                res.end();
            else {
                res.write(data);
                res.end();
            }
        })

}
/*
const server=http.createServer((req,res)=>{
   // console.log("Client Request...")
    console.log(req.url);
    
    res.setHeader("content-type","text/html");
    if(req.url=="/" || req.url=="/index.html")
    {
        fs.readFile("./index.html","utf-8",(err,data)=>{

            if(err)
                res.end();
            else{
                res.write(data);
                res.end();

            }
        })
    //res.write("Welcome to <b>Server</b>...")
    //res.end();
    }
    else if (req.url=="/about.html")
    {
         fs.readFile("./about.html","utf-8",(err,data)=>{

            if(err)
                res.end();
            else{
                res.write(data);
                res.end();

            }
        })
    //     res.write("About us page...")
    // res.end();
    }
     else if (req.url=="/style.css")
    {
         fs.readFile("./style.css","utf-8",(err,data)=>{

            if(err)
                res.end();
            else{
                res.write(data);
                res.end();

            }
        })
    //     res.write("About us page...")
    // res.end();
    }
     else if (req.url=="/coding.js")
    {
         fs.readFile("./coding.js","utf-8",(err,data)=>{

            if(err)
                res.end();
            else{
                res.write(data);
                res.end();

            }
        })
    //     res.write("About us page...")
    // res.end();
    }
    else{
        res.end();
        
    }

});
// server.on("connection",(socket)=>{
//     console.log("Client Request Received...")
// })
*/
server.listen(5000, (err) => {

    if (err)
        console.log(err);
    else
        console.log("Server Started...")
});

