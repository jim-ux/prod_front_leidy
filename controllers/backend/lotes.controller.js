"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLote = exports.updateLote = exports.getLote = void 0;
const db_1 = require("../../db");
const getLote = async (req, res, next) => {
    try {
        const codProd = req.params.codProd;
        const query = `call sp_c_lote(${codProd});`;
        const [[rows]] = await db_1.pool.query(query);
        res.send(rows[0]);
    }
    catch (error) {
        next(error);
    }
};
exports.getLote = getLote;
const updateLote = async (req, res) => {
    const { numLote, mzLote, svgLote, estdProd, areaProd, precioProd, codProd } = req.body;
    try {
        const query = `call sp_m_lote(${numLote}, '${mzLote}', '${svgLote}', '${estdProd}', '${areaProd}', '${precioProd}', ${codProd});`;
        await db_1.pool.query(query);
        res.status(200).json({
            message: 'success'
        });
    }
    catch (error) {
        res.status(500).send({
            message: 'Algo salió mal',
            error
        });
    }
};
exports.updateLote = updateLote;
const deleteLote = async (req, res) => {
    const codProd = req.params.codProd;
    try {
        res.send({
            message: `id a eliminar ${codProd}`
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Algo salió mal',
            error
        });
    }
};
exports.deleteLote = deleteLote;
