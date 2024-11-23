

const express=require("express")
const router=express.Router()
const homeReq=require("../controller/controller-Home")





router.get('/',homeReq.homeRequest)

  module.exports=router
   



