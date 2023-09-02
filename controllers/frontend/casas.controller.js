"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCasaDetalle = void 0;
const db_1 = require("../../db");
const getCasaDetalle = async (req, res, next) => {
    let nomProp = req.params.nomProp;
    nomProp = nomProp.replace(/-/g, ' ');
    const query = `call sp_c_casa_detalle('${nomProp}')`;
    try {
        const [[rows]] = await db_1.pool.query(query);
        if (rows[0].codProp) {
            res.json(rows[0]);
        }
        else {
            res.status(400).json({
                message: "sin datos"
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.getCasaDetalle = getCasaDetalle;
