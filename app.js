const exp=require ('express')
const cors=require('cors')
const m=require('mongoose')
const bodyparser=require('body-parser')

const url='mongodb://localhost/cbit'
m.connect(url,{useNewUrlParser:true})
const app=exp()


const con=m.connection
app.use(cors())
app.use(bodyparser.urlencoded({extended : true}))
con.on('open',function()

{
    console.log("database connected")
}
)
app.use(exp.json())

const r=require('./route/route')
app.use('/student',r)
app.listen(9000,()=>{
    console.log("server connected")
    console.log("hello")
})


