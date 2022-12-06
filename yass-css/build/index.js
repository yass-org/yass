"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const generate_1 = __importDefault(require("./generate"));
const fs = __importStar(require("fs"));
const yass_default_tokens_1 = __importDefault(require("yass-default-tokens"));
const build = ({ stylesheetOutDir = './public/styles', styleSheetFileName = 'yass.css', typesOutDir = './types', typesFileName = 'yass.d.ts', }) => {
    const { css, json } = (0, generate_1.default)(yass_default_tokens_1.default);
    fs.writeFile(`${stylesheetOutDir}/${styleSheetFileName}`, css, err => {
        if (err) {
            console.error(err);
            throw err;
        }
        console.log('Successfully wrote CSS');
    });
    const types = JSON.stringify(json, null, 2); // TODO: Generate actual types with style dictionary
    fs.writeFile(`${typesOutDir}/${typesFileName}`, types, err => {
        if (err) {
            console.error(err);
            throw err;
        }
        console.log('Successfully wrote JSON');
    });
};
exports.build = build;
