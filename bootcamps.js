const { Pool } = require('pg');

const pool= new Pool(
   {
    user:"postgres",
    password:"leoney31",
    database:"always_music",
    host: "localhost",
    port: 5432
    }
);

const consultar= async()=>{
    const sql=`SELECT b.id as bootcamp_id, j.id as turno_id, j.nombre as nombre_turno, b.codigo as codigo_bootcamp, b.agno as agno_bootcamp,
                l.nombre as nombre_lemguaje, l.id as id_lenguaje
                FROM bootcamps b
                inner join turnos j on j.id= b.turno_id
                inner join lenguajes l on l.id= b.lenguaje_id`

    const respuesta= await pool.query(sql)    
    return respuesta
}

module.exports={consultar}