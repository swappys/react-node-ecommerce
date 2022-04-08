const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
//for loggs
const morgan = require("morgan");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors");
//for error validation
const expressValidator = require ('express-validator')
dotenv.config();

//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require ('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require ('./routes/product')
const brainTreeRoutes = require('./routes/braintree')




//app
const app = express();


//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true
}).then(() =>console.log("DB Connected"))


//middlewares
app.use(cors());
app.use(expressValidator());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware
app.use('/api',productRoutes);
app.use('/api',userRoutes);
app.use('/api',authRoutes);
app.use('/api',categoryRoutes);
app.use('/api',brainTreeRoutes);

const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});