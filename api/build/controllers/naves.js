"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const naves_1 = require("../models/naves");
const utils_1 = require("../utils");
const navesServices = __importStar(require("../services/navesServices"));
const navesRouter = express_1.default.Router();
navesRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseNavesLanzadera = yield naves_1.modelNaveLanzadera.find({});
    const responseNavesTripulada = yield naves_1.modelNaveTripulada.find({});
    const responseNavesNoTripulada = yield naves_1.modelNaveNoTripulada.find({});
    const responseAll = [...responseNavesLanzadera, ...responseNavesTripulada, ...responseNavesNoTripulada];
    res.json(responseAll);
    // res.send('listar todas las naves')
}));
navesRouter.post('/', (req, res) => {
    const { tipo } = req.body;
    // const h = req.body.tipo
    try {
        if (tipo === 'lanzadera') {
            const newNave = utils_1.newNaveLanzaderaEntry(req.body);
            navesServices
                .addNaveLanzadera(newNave)
                .then((naveSaved) => {
                return res.json(naveSaved).end();
            })
                .catch((err) => {
                console.error(err.message);
                res.status(400).end();
            });
        }
        else if (tipo === 'tripulada') {
            const newNave = utils_1.newNaveTripuladaEntry(req.body);
            navesServices
                .addNaveTripulada(newNave)
                .then((naveSaved) => {
                res.json(naveSaved);
            })
                .catch((err) => {
                console.error(err.message);
                res.status(400).end();
            });
            // res.json({response: 'tripulada'})
        }
        else if (tipo === 'noTripulada') {
            const newNave = utils_1.newNaveNoTripuladaEntry(req.body);
            navesServices
                .addNaveNoTripulada(newNave)
                .then((naveSaved) => {
                res.json(naveSaved).end();
            })
                .catch((err) => {
                console.error(err.message);
                res.status(400).end();
            });
        }
        else {
            res.json({ response: 'no es lanzadera' });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message, ok: false }).end();
    }
});
exports.default = navesRouter;
