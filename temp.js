const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/',(req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.send("This is about page");
})
app.get("/profile", (req, res) => {
    res.send("This is profile page");
})
app.post("/get-form-data",(req,res)=>{
    console.log(req.body);
    res.send("Form data received");
})
app.listen(3000);