//import expresss
const express=require('express');
//create express app
const app=express();
//create server port
const port=process.env.PORT || 5000;
//create route route
app.get('/',(req,res)=>
{
    res.send('Hello NodeJs ');

}
);
//Listen to port
app.listen(port,()=>
{
console.log(`Server is running at port ${port}`);
});