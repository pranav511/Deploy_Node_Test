const express=require('express')
const dotenv=require('dotenv');
const app=express()
dotenv.config({path:'./.env'})
const PORT=process.env.PORT
app.get('/api',(req,res)=>{
res.send("Hello from visual Studio Code");
})
app.listen(PORT,()=>{
console.log(`working Successfully at port no ${PORT}`);
})