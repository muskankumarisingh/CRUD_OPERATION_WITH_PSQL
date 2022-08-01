const express = require("express");
const config =require("./config/config.json")
const app = express();
app.use(express.json());


app.use('/usersDetails',require('./router/user'));


app.listen(5000,()=>{
    console.log("server is running on port 5000 ")
});