"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const walkSync = (dir, callback) => {
    const files = fs_1.default.readdirSync(dir);
    files.forEach((file) => {
        var filepath = path_1.default.join(dir, file);
        const stats = fs_1.default.statSync(filepath);
        if (stats.isDirectory()) {
            walkSync(filepath, callback);
        }
        else if (stats.isFile()) {
            callback(filepath, stats);
        }
    });
};
exports.default = walkSync;
