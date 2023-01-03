#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("./build");
const build_types_1 = require("./build-types");
const walk_sync_1 = __importDefault(require("./utils/walk-sync"));
const write_file_1 = __importDefault(require("./utils/write-file"));
const tokens_1 = require("./tokens");
// Validate and process config
const userConfig = require(`${process.cwd()}/yass.config.json`); // Open user config JSON
const config = {
    includeBaseClasses: userConfig.includeBaseClasses !== undefined ? userConfig.includeBaseClasses : true,
    stylesheet: {
        buildPath: ((_a = userConfig.stylesheet) === null || _a === void 0 ? void 0 : _a.buildPath) || 'styles/yass/',
        filename: ((_b = userConfig.stylesheet) === null || _b === void 0 ? void 0 : _b.filename) || 'yass.css',
    },
    types: {
        buildPath: ((_c = userConfig.types) === null || _c === void 0 ? void 0 : _c.buildPath) || 'types/',
        filename: ((_d = userConfig.types) === null || _d === void 0 ? void 0 : _d.filename) || 'yass.ts',
    },
};
// Validate and process command line args
const tokensDir = process.argv[2];
let tokens = [];
if (tokensDir) {
    (0, walk_sync_1.default)(tokensDir, (filepath, stats) => {
        tokens.push(...require(`${process.cwd()}/${filepath}`));
    });
}
else {
    tokens = tokens_1.defaults;
}
// Build stylesheet from tokens
const stylesheet = (0, build_1.build)(tokens, config.includeBaseClasses ? tokens_1.css : []);
const { buildPath, filename } = config.stylesheet;
(0, write_file_1.default)(buildPath, filename, stylesheet);
const types = (0, build_types_1.buildTypes)(tokens, config.includeBaseClasses ? tokens_1.css : []);
const { buildPath: typesBuildPath, filename: typesFilename } = config.types;
(0, write_file_1.default)(typesBuildPath, typesFilename, types);
