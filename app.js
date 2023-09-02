"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: ['http://localhost:4200', 'http://192.168.100.149:4200', 'https://leidyinmobilaria.com.pe']
};
const app = (0, express_1.default)();
// ***IMPORTACIONES FRONTEND
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const propiedades_routes_1 = __importDefault(require("./routes/frontend/propiedades.routes"));
const lotes_routes_1 = __importDefault(require("./routes/frontend/lotes.routes"));
const casas_routes_1 = __importDefault(require("./routes/frontend/casas.routes"));
// ***IMPORTACIÓN RUTAS
const index_routes_2 = __importDefault(require("./routes/index.routes"));
// ***FUNCION DEL MIDDLEWARE 500
const error500_middleware_1 = require("./middlewares/error500.middleware");
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(__dirname + "/public"));
// ***RUTAS FRONTEND
app.use("/api/index", index_routes_1.default);
// ? ruta --> "/api/front/propiedades"
app.use("/api/front", propiedades_routes_1.default);
// ? ruta --> "/api/front/lotes"
app.use("/api/front", lotes_routes_1.default);
// ? ruta --> "/api/casas"
app.use("/api/front", casas_routes_1.default);
// ***RUTAS BACKEND 
// ? Índice de rutas backend
app.use("/api/back", index_routes_2.default);
app.use('*', (_req, res, _next) => {
    res.status(404).json({
        message: 'Error -> ruta no encontrada'
    });
});
app.use(error500_middleware_1.error500);
exports.default = app;
