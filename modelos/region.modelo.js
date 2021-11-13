//cargar la libreria con la conexion a la bd
var bd = require('./bd');

//constructor
const Region = function () { }

//metodo que obtiene la lista de paises
Region.listar = function (idPais, resultado) {
    //obtener objeto de conexion a la base de datos
    const basedatos = bd.obtenerBaseDatos();

    //Ejecutar la consulta
    basedatos.collection('paises')
        //***** Código Mongo *****
        .aggregate([
            { $match: { id: eval(idPais) } },
            {
                $project: {
                    'regiones.nombre': 1,
                    'regiones.area': 2,
                    'regiones.poblacion': 3,
                }
            }]
        )
        //************************
        .toArray(function (err, res) {
            if (err) {
                console.log("Error listando regiones", err);
                resultado(err, null);
            }
            else {
                resultado(null, res[0].regiones);
            }
        });

}


module.exports = Region;