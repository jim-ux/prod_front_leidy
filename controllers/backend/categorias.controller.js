"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategorias = void 0;
const db_1 = require("../../db");
const getCategorias = async (_req, res, next) => {
    try {
        const query = 'call sp_c_categorias();';
        const [[rows, result], fields] = await db_1.pool.query(query);
        res.json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.getCategorias = getCategorias;
