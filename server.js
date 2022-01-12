const app=require('./app');




port=7000;
app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})