const express=require("express")
const mongoose= require("mongoose")
const cors=require("cors")
const book=require(/model/book)

const app=express()
app.use(cors())


app.get("/" ,(req,res)=>{
    res.send("hey hello")
}
)

app.get("/contact",(req,res)=>{
    res.send("welcome to backend program")
})

app.listen(8080,()=>{
    console.log("server started")
})