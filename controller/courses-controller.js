

let array=[
    {id:1,name:"sam",age:27},
    {id:2,name:"mamad",age:22},
    {id:3,name:"alireza",age:19},
    {id:4,name:"ahmad",age:59},
    {id:5,name:"sara",age:39},
  
];
  

const getCourse=(req,res)=>{

    if(!req.body.name||req.body.name.length<3){
      res.status(400).send("found not");
      return 
    }
    
  const course={
    id:array.length+1,
    name:req.body.name,

  }
  array.push(course)
  // res.send(course)
  let i=0
  for (i;i<=array.length;i++){
    res.send(array)
  }

}



const coursePut=(req,res)=>{
    const newCourse=array.find(item=>item.id===parseInt(req.params.id))
    if(!newCourse)return res.status(404).send("not existe")
      
      if(!req.body.name || req.body.name.length<3)
       return res.status(404).send("not ")
  
  
      newCourse.name=req.body.name
      res.send(newCourse)
  }

  
const courseDlet=(req,res)=>{ 
    const newItemArray=array.find(item=>item.id===parseInt(req.params.id))
    if(!newItemArray)return res.status(404).send("not found")

    const index=  array.indexOf(newItemArray)
    array.splice(index,1)
    res.send(array)
}

module.exports={
    getCourse,
    coursePut,
    courseDlet
}