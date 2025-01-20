const express = require("express");
const app = express();
const usermodel = require("./views/app"); 
console.log(usermodel); 

app.get('/',(req,res)=>{
    res.send("hey ")
})
app.get('/create', async (req,res)=>{
    const createduser = await usermodel.create({
        name:"priyansh",
        username:"pikachuuu",
        email:"something1267@gmail.com"
    })
    res.send(createduser)
});

app.get('/update',async (req,res)=>{
   
   const updateduser =await usermodel.findOneAndUpdate({ username:"pikachuuu"},{name:"manash"},{new:true});
   res.send(updateduser)
})

app.get("/read",async (req,res)=>{
    const readuser = await usermodel.findOne({"email": "ambika123@gmail.com"});
    res.send(readuser)
})

app.get("/delete",async (req,res)=>{
    const deleteuser = await usermodel.findOneAndDelete({"email": "something1267@gmail.com"});
    res.send(deleteuser)
})
app.listen(3000)
