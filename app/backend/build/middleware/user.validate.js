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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const services_1 = require("../services");
const joi_1 = __importDefault(require("joi"));
const error_1 = __importDefault(require("../utils/error"));
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
const secret = process.env.JWT_SECRET || 'jwt_secret';
const incorrectMsg = 'Incorrect email or password';
class Validate {
}
_a = Validate;
Validate.createUserfieldValidate = async (req, res, next) => {
    try {
        console.log("FUI CHAMADO");
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(4).required(),
            email: joi_1.default.string().email().required(),
            senha: joi_1.default.string().min(5).required(),
            avatar: joi_1.default.string().required(),
            dataDeNascimento: joi_1.default.date().required(),
        });
        await schema.validateAsync(req.body);
        return next();
    }
    catch (err) {
        return res.status(error_1.default.UNPROCESSABLE_ENTITY).json({ messageaaaa: err.message });
    }
};
Validate.loginFieldHandle = async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const fieldsRequire = name && password;
        if (!fieldsRequire) {
            return res
                .status(400)
                .json({ message: 'All fields must be filled' });
        }
        return next();
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
Validate.fieldValidate = async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const userData = await services_1.User.findByName(name);
        if (!userData) {
            return res.status(401).json({ message: incorrectMsg });
        }
        const checkPassword = bcrypt.compareSync(password, userData.senha);
        if (checkPassword === false) {
            return res.status(401).json({ message: incorrectMsg });
        }
        return next();
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
exports.default = Validate;
