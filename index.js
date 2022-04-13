const express = require('express');
const { consultar, registrar }= require('./bootcamps.js');

const app = express();

app.use(express.json());

app.listen(3000, ()=>{console.log("Servidor levantado en http://localhost:3000")});

app.get("/bootcamps",async(request, response)=>{
    const prueba=await consultar()
    response.json(prueba.rows)  
})

app.post("/bootcamps", async (request, response) => {
    const { lenguaje_id, turno_id, agno, codigo } = request.body;
    const bootcamp = {
        lenguaje_id,
        turno_id,
        agno,
        codigo
    }
    const respuesta = await registrar(bootcamp);
    response.json(respuesta);
})

