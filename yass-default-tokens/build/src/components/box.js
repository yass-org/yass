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
exports.box = void 0;
const base = __importStar(require("../base"));
exports.box = [
    {
        properties: [
            'background-color',
            'border-bottom-color',
            'border-color',
            'border-left-color',
            'border-right-color',
            'border-top-color',
        ],
        tokens: {
            'primary': base.color.tokens['blue-500'],
            'primary-hover': base.color.tokens['blue-300'],
            'primary-active': base.color.tokens['blue-700'],
            'subtle': base.color.tokens['neutral-300'],
            'subtle-hover': base.color.tokens['neutral-200'],
            'subtle-active': base.color.tokens['neutral-400'],
            'neutral': base.color.tokens['neutral-600'],
            'neutral-hover': base.color.tokens['neutral-500'],
            'neutral-active': base.color.tokens['neutral-700'],
            'success': base.color.tokens['green-500'],
            'success-hover': base.color.tokens['green-400'],
            'success-active': base.color.tokens['green-600'],
            'warning': base.color.tokens['orange-500'],
            'warning-hover': base.color.tokens['orange-400'],
            'warning-active': base.color.tokens['orange-600'],
            'danger': base.color.tokens['red-500'],
            'danger-hover': base.color.tokens['red-400'],
            'danger-active': base.color.tokens['red-600'],
            'link': base.color.tokens['blue-500'],
            'link-hover': base.color.tokens['blue-400'],
            'link-active': base.color.tokens['blue-600'],
            'link-visited': base.color.tokens['purple-500'],
        }
    },
    {
        properties: [
            'z-index',
        ],
        tokens: {
            'sunken': base.elevation.tokens['0'],
            'default': base.elevation.tokens['100'],
            'raised': base.elevation.tokens['500'],
            'overlay': base.elevation.tokens['900'],
        }
    },
];
