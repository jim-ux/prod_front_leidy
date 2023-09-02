"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServicios = void 0;
const db_1 = require("../../db");
const getServicios = async (_req, res, next) => {
    try {
        const query = `call sp_c_servicios();`;
        const [[rows]] = await db_1.pool.query(query);
        res.json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.getServicios = getServicios;
