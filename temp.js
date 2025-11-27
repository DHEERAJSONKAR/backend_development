const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send("Director Dheeraj");
})
app.get("/about", (req, res)=>{
    res.send("This is about page");
})
app.get("/profile", (req, res)=>{
    res.send("This is profile page");
})
app.listen(3000);