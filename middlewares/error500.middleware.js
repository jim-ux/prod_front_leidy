"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error500 = void 0;
const error500 = (error, _req, res, _next) => {
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({
        message: 'algo salió mal',
        error,
    });
};
exports.error500 = error500;
