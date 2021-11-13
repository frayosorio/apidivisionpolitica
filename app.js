const express=require('express');
const app=express();

//realizar la conexion a la BD
const bd = require('./modelos/bd');
bd.conectar();

const puerto = 3020;

//Cargar librería para 'parseo' de contenido JSON
//var bodyParser = require('body-parser');
app.use(express.json());

//Dejar disponibles las rutas a los métodos web
require('./rutas/pais.rutas')(app);
require('./rutas/region.rutas')(app);

app.listen(puerto, ()=> {
    console.log(`Servicio iniciado a través de la url http://localhost:${puerto}`)
})