"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDir = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const checkDir = (dir) => {
    const absoluteDir = path_1.default.join(__dirname, '..', 'public', 'images', dir);
    if (!fs_1.default.existsSync(absoluteDir))
        fs_1.default.mkdirSync(absoluteDir);
};
exports.checkDir = checkDir;
