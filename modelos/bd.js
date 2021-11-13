//Cargar la libreria para operar con bases de datos mongo
const mongo = require('mongodb').MongoClient;

//Cargar la configuracion de la BD
const configBD = require('../configuracion/bd.config');

//Asignar cadena de coenexion
const url = `mongodb://${configBD.SERVIDOR}:${configBD.PUERTO}`;

//objeto que contiene la conexion a la bd
let basedatos;

module.exports={
    conectar: function(){
        //conectar al servidor
        mongo.connect(url, function(err, cliente){
            if(err || !cliente){
                console.log(err);
                return err;
            }
            //obtener la base de datos
            basedatos = cliente.db(configBD.BASEDATOS);
            console.log('Se ha establecido conexion al servidor de MONGO');
        }
        );
    },

    obtenerBaseDatos: function(){
        return basedatos;
    }
}