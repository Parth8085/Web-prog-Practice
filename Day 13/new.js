const express= require('express')
const app=express();
const portnumber=8080;
app.get('/',(req,res)=>{
    res.send("Hello this is from express")

})
app.listen(portnumber,()=>{
console.log(`http://localhost:${portnumber}`)
})