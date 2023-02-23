const express = require('express');
const app = require ('express')();
const PORT = 4040 ;
app.use(express.json())

app.listen(
    PORT,
    ()=>console.log ('server is running at http://localhost:4040')
);
app.get('/shirt',(req, res) =>{
    res.status(200).send({
        size: 'medium',
        color : 'white'

    })
})
app.post('/shirt/:id',(req, res)=>{
   const{id} =req.params
   const {logo} = req.body

   if (!logo){
    res.status(404).send({message:'we need a logo'})
   }
   res.send({
    shirt:' shirt with ${logo} and ID of ${id}'
   })
})