"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propiedades_controller_1 = require("../../controllers/frontend/propiedades.controller");
const router = (0, express_1.Router)();
//Frontend
router.get('/propiedades', propiedades_controller_1.getPropiedades);
//Backend 
exports.default = router;
