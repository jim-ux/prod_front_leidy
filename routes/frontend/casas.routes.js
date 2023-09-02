"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const casas_controller_1 = require("../../controllers/frontend/casas.controller");
const router = (0, express_1.Router)();
router.get('/casas/:nomProp', casas_controller_1.getCasaDetalle);
exports.default = router;
