const express = require('express');
const { consultar, registrar, actualizar, eliminar }= require('./bootcamps.js');

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

app.put("/bootcamps", async (req, res) => {
    const bootcamp = req.body;
    const respuesta = await actualizar(bootcamp);
    res.json(respuesta);
})

app.delete("/bootcamps/:id", async(req, res) => {
    const id = req.params.id;
    const respuesta = await eliminar(id);
    res.json(respuesta);
})
