"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_DATABASE = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.DB_USER = process.env.DB_USER || 'root';
exports.DB_PASSWORD = process.env.DB_PASSWORD || '';
exports.DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_DATABASE = process.env.DB_DATABASE || 'db_leidyinmo';
exports.DB_PORT = process.env.DB_PORT || 3306;
