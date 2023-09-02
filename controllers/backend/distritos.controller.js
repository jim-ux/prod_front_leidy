"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistritos = void 0;
const db_1 = require("../../db");
const getDistritos = async (_req, res, next) => {
    try {
        const query = 'call sp_c_distritos();';
        const [[rows, result], fields] = await db_1.pool.query(query);
        res.json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.getDistritos = getDistritos;
