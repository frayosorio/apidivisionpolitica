module.exports = (app) => {

    const controlRegion = require('../controladores/region.controlador');

    //metodo de la API que obtiene la lista de paises
    app.get("/regiones/:id", controlRegion.listar);

}