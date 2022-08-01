"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('verificar funcion isNumber', () => {
    test('100 en string es numer', () => {
        const res = utils_1.isNumber('100');
        expect(res).toBe(true);
    });
    test('100 en number en number', () => {
        expect(utils_1.isNumber(100)).toBe(true);
    });
    test('string es un numero', () => {
        expect(utils_1.isNumber('string')).toBe(false);
    });
    test('20h20 es un numero', () => {
        expect(utils_1.isNumber('20h20')).toBe(false);
    });
});
