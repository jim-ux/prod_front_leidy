"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLotes = void 0;
const db_1 = require("../../db");
const getLotes = async (req, res, next) => {
    let prop = req.params.nomProp;
    prop = prop.replace(/-/g, ' ');
    try {
        // ? Detalles de Propiedad
        const query = `call sp_f_c_propiedad_detalle('${prop}');`;
        const [[rows]] = await db_1.pool.query(query);
        // ? Lista de lotes asignados a propiedad
        const query2 = `call sp_c_lotes(${rows[0].codProp});`;
        const [[rows2]] = await db_1.pool.query(query2);
        // ? Servicios con los que cuenta la propiedad
        let query3 = `call sp_c_serv_prop(${rows[0].codProp});`;
        const [rows3] = await db_1.pool.query(query3);
        // ? Lista de imágenes
        let query4 = `call sp_c_imagenes(${rows[0].codProp});`;
        const [[rows4]] = await db_1.pool.query(query4);
        const rutaImagenes = rows4.map((element) => {
            return `${req.protocol}://${req.get('host')}/images/${rows[0].codProp}/${element.rutaImagen}`;
        });
        let result = rows[0];
        result.lotes = rows2;
        result.imagenes = rutaImagenes;
        if (rows3[0].length > 0) {
            result.servicios = rows3[0];
        }
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getLotes = getLotes;
