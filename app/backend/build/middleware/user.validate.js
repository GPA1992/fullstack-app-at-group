"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/* import * as bcrypt from 'bcryptjs'; */
const services_1 = require("../services");
/* import * as jwt from 'jsonwebtoken'; */
const schema_1 = __importDefault(require("./schema/schema"));
const httpsStatus_1 = __importDefault(require("../utils/httpsStatus"));
/* const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
}; */
/* const secret = process.env.JWT_SECRET || 'jwt_secret'; */
const incorrectMsg = 'Incorrect email or password';
class Validate {
}
_a = Validate;
Validate.createUserfieldValidate = async (req, res, next) => {
    try {
        await schema_1.default.validateAsync(req.body);
        return next();
    }
    catch (err) {
        return res.status(httpsStatus_1.default.UNPROCESSABLE_ENTITY).json({ message: err.message });
    }
};
Validate.createUserValidate = async (req, res, next) => {
    try {
        const { nome } = req.body;
        const checkIfUserAlreadyExists = await services_1.User.findByName(nome);
        if (Array.isArray(checkIfUserAlreadyExists) && checkIfUserAlreadyExists.length > 0) {
            return res.status(httpsStatus_1.default.CONFLICT).json({ messageaaaa: 'User already exists' });
        }
        return next();
    }
    catch (err) {
        return res.status(httpsStatus_1.default.UNPROCESSABLE_ENTITY).json({ messageaaaa: err.message });
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
exports.default = Validate;
