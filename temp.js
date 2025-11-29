const express = require('express');
const morgan = require('morgan')
const app = express();
app.set('view engine', 'ejs');
app.use((req, res, next) => {
    console.log("This is middleware");
    const a=10
    const b=20
    const sum=a+b
    console.log("Sum is: "+sum);
    return next();
})
app.get('/', (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.send("This is about page");
})
app.get("/profile", (req, res) => {
    res.send("This is profile page");
})
app.listen(3000);