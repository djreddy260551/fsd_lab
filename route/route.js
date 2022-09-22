const exp=require('express')
const router=exp.Router()
const s=require('../model/model')
router.get('/',async(req,res)=>
{
  
 try{
    const x=await s.find()
    res.json(x)

 } catch(err) {
res.send("error"+err)

 }
}
)
router.get('/:id',async(req,res)=>
{
  
 try{
    const x2=await s.findById(req.params.id)
    res.json(x2)

 } catch(err) {
res.send("error"+err)

 }
}
)
router.post('/',async(req,res)=>

{
   const a1=new s (
   {
      name:req.body.name,
      tech:req.body.tech,
      section:req.body.section
   
   })
try{
   const x1=await a1.save()
    res.json(x1)

}catch(err){
   res.send("error"+err)
}

})
module.exports=router