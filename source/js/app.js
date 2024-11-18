

const express=require('express')
const app=express()
require('dotenv').config()

app.get('/sam',(req,res)=>{
  res.send("sam is");
})
const port=process.env.APP_PORT || 2000

app.listen(port,()=>{
  console.log("sam")
})

