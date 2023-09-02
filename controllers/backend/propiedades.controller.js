"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropiedad = exports.getPropiedad = exports.getPropiedades = void 0;
const db_1 = require("../../db");
const getPropiedades = async (_req, res, next) => {
    try {
        let query = `call sp_c_propiedades();`;
        const [[rows, result], fields] = await db_1.pool.query(query);
        res.json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.getPropiedades = getPropiedades;
const getPropiedad = async (req, res, next) => {
    let codProp = req.params.codProp;
    try {
        const queryProp = {
            detalle: `call sp_c_propiedad(${codProp});`,
            lotes: `call sp_c_lotes(${codProp})`,
            servicios: `call sp_c_serv_prop(${codProp});`,
            imagenes: `call sp_c_imagenes(${codProp});`
        };
        // ? Detalles de Propiedad
        const [[rows, result], fields] = await db_1.pool.query(queryProp.detalle);
        // ? Lotes de la propiedad
        const [[rows2]] = await db_1.pool.query(queryProp.lotes);
        // ? Servicios con los que cuenta la propiedad
        const [[rows3]] = await db_1.pool.query(queryProp.servicios);
        // ? Lista de imágenes
        const [[rows4]] = await db_1.pool.query(queryProp.imagenes);
        const resultado = rows[0];
        resultado.lotes = rows2,
            resultado.servicios = rows3;
        resultado.imagenes = rows4.map((element) => {
            return `${req.protocol}://${req.get('host')}/images/${codProp}/${element.rutaImagen}`;
        });
        res.json(rows[0]);
    }
    catch (error) {
        next(error);
    }
};
exports.getPropiedad = getPropiedad;
const createPropiedad = (req, res) => {
    res.send(req.body);
};
exports.createPropiedad = createPropiedad;
