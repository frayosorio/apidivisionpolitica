//cargar el modelo de paises
const region = require('../modelos/region.modelo');

//metodo web para obtener la lista de regiones
exports.listar = (req, res) => {
    region.listar(req.params.id, (err, datos) => {
        if (err) {
            res.status(500).send({ mensaje: 'Error obteniendo la lista de regiones' });
        }
        //devolver los registros obtenidos
        res.send(datos);
    }
    );
}