"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
describe('yass-default-tokens', () => {
    it('base tokens match snapshot', () => {
        expect(index_1.default.base).toMatchSnapshot();
    });
    it('component tokens match snapshot', () => {
        expect(index_1.default.components).toMatchSnapshot();
    });
    it('utility classes match snapshot', () => {
        expect(index_1.default.utility).toMatchSnapshot();
    });
});
