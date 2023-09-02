"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlano = void 0;
const db_1 = require("../../db");
const getPlano = async (req, res) => {
    const codProp = req.params.codProp;
    let query = `call sp_c_plano_prop(${codProp})`;
    try {
        const [[rows]] = await db_1.pool.query(query);
        res.json(rows[0]);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error de servidor',
        });
    }
};
exports.getPlano = getPlano;
