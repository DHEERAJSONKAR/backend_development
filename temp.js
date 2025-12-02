const express = require('express');
const morgan = require('morgan')
const dbConnection = require('./config/db');
const userModel = require('./models/user');
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
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register", async(req,res)=>{
   const {username, email, password} = req.body; 
   const newUser = await userModel.create({
    username: username,
    email: email,
    password: password
})
    res.send(newUser);
})
app.get("/get-user", (req,res)=>{
    userModel.findOne({
        username:"dheeraj"
    }).then((users)=>{
        res.send(users);
    })
})
app.get("/update-user", async(req,res)=>{
    await userModel.findOneAndUpdate({
        username:"dheeraj"
    },{
        email:"raj23@gmail.com"
    })
    res.send("User Updated")
})
app.get("/delete-user", async(req,res)=>{
    await userModel.findOneAndDelete({
        username:"dheeraj"
    })
    res.send("User Deleted")
})
app.listen(3000);