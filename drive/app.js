const express = require("express");
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');
const app = express();
app.set("view engine", "ejs");
const dotenv = require('dotenv');
dotenv.config();
const connectTODB = require('./config/db');
connectTODB();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("server is running on 3000")
})