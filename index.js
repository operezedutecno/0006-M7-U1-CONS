const express = require('express');
const { consultar }= require('./bootcamps.js');

const app= express();
app.listen(3000, ()=>{console.log("Servidor levantado en http://localhost:3000")});

app.get("/bootcamps",async(request, response)=>{
    const prueba=await consultar()
    response.json(prueba.rows)  
})

