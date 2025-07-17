import http from "http";

let server = http.createServer((req,res)=>{
    res.end("Hello...");
});

server.listen(8082, () => {
    console.log("Server Started");u
    
});