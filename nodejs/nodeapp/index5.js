import express from 'express'

const app=express();

const  logger = (req, res, next) => {
    req.message = "Logger";
    next();
};

// app.use(logger);

app.get("/",(req,res)=>{
    response.end(req.message);
});

app.listen(8080,()=>{
    console.log("Server started");
});