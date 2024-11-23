 const express=require("express")
const router=express.Router()
const coursesController=require("../controller/courses-controller")


router.post('/',coursesController.getCourse)
router.put('/:id',coursesController.coursePut)
router.delete('/:id',coursesController.courseDlet)


module.exports=router;






