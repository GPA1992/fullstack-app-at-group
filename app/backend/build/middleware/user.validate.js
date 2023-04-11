"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/* import * as jwt from 'jsonwebtoken'; */
const schema_1 = __importDefault(require("./schema/schema"));
const error_1 = __importDefault(require("../utils/error"));
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
        return res.status(error_1.default.UNPROCESSABLE_ENTITY).json({ messageaaaa: err.message });
    }
};
/* public static createUserValidate = async  (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (err: any) {
        return res.status(error.UNPROCESSABLE_ENTITY).json({ messageaaaa: err.message });
    }
}; */
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
