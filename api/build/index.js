"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const naves_1 = __importDefault(require("./controllers/naves"));
require("dotenv/config");
require("./mongo");
const app = express_1.default();
// dotenv.config()
app.use(express_1.default.json());
app.use(express_1.default.static('../app/build')); // react 
app.use('/api/naves', naves_1.default);
app.get('/api/hello', (_req, res) => {
    res.send('Hello world!');
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
