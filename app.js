import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/connection.js';
import userRouter from "./router/userRouters.js"
import bodyParser from 'body-parser';


const app=express();
//env data
const port = process.env.PORT || 3000;
const db_url=process.env.DATA_BASE_URI;
const dbName=process.env.DB_NAME;

app.use(bodyParser.urlencoded({extended:false}))

app.set('views', "./views")
app.set('view engine', 'ejs')

try {
    app.get('/', (req, res) => {
        console.log("from ejs fie");

        res.render('index')
    
    });
} catch (error) {
    console.log("err from ejs fie");
}

connectDB(db_url,dbName);

app.use(express.json())
app.use('/',userRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
