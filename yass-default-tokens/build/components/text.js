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
exports.text = void 0;
var base = __importStar(require("../base"));
exports.text = [
    {
        properties: [
            'font-weight',
        ],
        tokens: {
            'light': base.fontWeight.tokens['200'],
            'normal': base.fontWeight.tokens['400'],
            'bold': base.fontWeight.tokens['700'],
        }
    },
    {
        properties: [
            'color',
        ],
        tokens: {
            'text': base.color.tokens['neutral-800'],
            'primary': base.color.tokens['neutral-100'],
            'primary-hover': base.color.tokens['neutral-50'],
            'primary-active': base.color.tokens['neutral-200'],
            'subtle': base.color.tokens['neutral-700'],
            'subtle-hover': base.color.tokens['neutral-600'],
            'subtle-active': base.color.tokens['neutral-800'],
            'neutral': base.color.tokens['neutral-100'],
            'neutral-hover': base.color.tokens['neutral-50'],
            'neutral-active': base.color.tokens['neutral-200'],
            'success': base.color.tokens['neutral-100'],
            'success-hover': base.color.tokens['neutral-50'],
            'success-active': base.color.tokens['neutral-200'],
            'warning': base.color.tokens['neutral-100'],
            'warning-hover': base.color.tokens['neutral-50'],
            'warning-active': base.color.tokens['neutral-200'],
            'danger': base.color.tokens['neutral-100'],
            'danger-hover': base.color.tokens['neutral-50'],
            'danger-active': base.color.tokens['neutral-200'],
        }
    },
];
