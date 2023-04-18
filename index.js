const express=require('express')
const app=express();
const connectDB=require('./config/db')
const route=require("./routes/userRoute")
const env=require('dotenv').config()
const port=process.env.PORT || 3000
const cors=require ('cors')

app.use(express.json())
app.use(cors())
connectDB()
app.use("/usertable",route)
app.listen(port, ()=> console.log(`server is running on port ${port}`))
