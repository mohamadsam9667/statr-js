

const express=require('express')
const app=express()


app.get('/',(req,res)=>{
  res.send("sam is");
})
const port=process.env.APP_PORT || 2000

app.listen(port,()=>{
  console.log("sam")
})

