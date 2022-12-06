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
Object.defineProperty(exports, "__esModule", { value: true });
exports.utility = void 0;
var base = __importStar(require("./base"));
exports.utility = [
    {
        name: 'visually-hidden',
        declarations: [
            { property: 'position', value: 'absolute' },
            { property: 'width', value: '1px' },
            { property: 'height', value: '1px' },
            { property: 'margin', value: '-1px' },
            { property: 'border', value: '0' },
            { property: 'padding', value: '0' },
            { property: 'white-space', value: 'no-wrap' },
            { property: 'clip-path', value: 'inset(100%)' },
            { property: 'clip', value: 'rect(0 0 0 0)' },
            { property: 'overflow', value: 'hidden' },
        ]
    },
    {
        name: 'debug',
        declarations: [
            { property: 'background-color', value: base.color.tokens['red-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-red',
        declarations: [
            { property: 'background-color', value: base.color.tokens['red-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-orange',
        declarations: [
            { property: 'background-color', value: base.color.tokens['orange-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-yellow',
        declarations: [
            { property: 'background-color', value: base.color.tokens['yellow-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-green',
        declarations: [
            { property: 'background-color', value: base.color.tokens['red-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-teal',
        declarations: [
            { property: 'background-color', value: base.color.tokens['teal-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-blue',
        declarations: [
            { property: 'background-color', value: base.color.tokens['blue-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-purple',
        declarations: [
            { property: 'background-color', value: base.color.tokens['purple-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
    {
        name: 'debug-pink',
        declarations: [
            { property: 'background-color', value: base.color.tokens['pink-900'] },
            { property: 'opacity', value: base.opacity.tokens['10'] },
        ],
    },
];
