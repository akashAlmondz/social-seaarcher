const express=require('express');
const app=express();
const routes=require('./routes/main');
require('dotenv').config()

app.use(express.json())


app.use('/api/v1',routes);
app.get('https://instagram.com/akashbadola',(req,res)=>{
    res.json(res);
})




module.exports=app;