"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { MONGO_DB_URI } = process.env;
if (MONGO_DB_URI !== undefined) {
    mongoose_1.default.connect(MONGO_DB_URI)
        .then(() => {
        console.log('Database connection established');
    })
        .catch((e) => {
        console.error(e.message);
    });
    process.on('uncaughtException', () => {
        mongoose_1.default.connection.close();
    });
}
