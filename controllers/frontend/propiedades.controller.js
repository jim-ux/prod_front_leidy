"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropiedades = void 0;
const db_1 = require("../../db");
const getPropiedades = async (req, res, next) => {
    try {
        let query = `call sp_f_c_propiedades();`;
        const [[rows, result], field] = await db_1.pool.query(query);
        rows.map((prop) => {
            //Ruta del servidor
            let ruta = `${req.protocol}://${req.get('host')}/images/`;
            //Ruta de la Imagen
            let pathImage = prop.rutaImagen;
            pathImage = `${prop.codProp.toString()}/${pathImage}`;
            return prop.rutaImagen = ruta + pathImage;
        });
        res.json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.getPropiedades = getPropiedades;
