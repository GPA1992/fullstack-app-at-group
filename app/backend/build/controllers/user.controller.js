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
const httpsStatus_1 = __importDefault(require("../utils/httpsStatus"));
const services_1 = require("../services");
class UserController {
}
exports.default = UserController;
_a = UserController;
UserController.addNewUser = async (req, res) => {
    try {
        const { body } = req;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.senha, salt);
        const newUser = Object.assign(Object.assign({}, body), { senha: hash });
        await services_1.User.create(newUser);
        const response = { message: `User ${newUser.nome} criado com sucesso` };
        return res.status(httpsStatus_1.default.CREATED).json(response);
    }
    catch (err) {
        return res.status(500).json({
            message: 500,
            error: err.message,
        });
    }
};
UserController.userUpdate = async (req, res) => {
    try {
        const { body } = req;
        const { nome } = req.params;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.senha, salt);
        const newUser = Object.assign(Object.assign({}, body), { senha: hash });
        await services_1.User.update(nome, newUser);
        const response = { message: 'Usuario atualizado com sucesso' };
        return res.status(httpsStatus_1.default.CREATED).json(response);
    }
    catch (err) {
        return res.status(500).json({
            message: 500,
            error: err.message,
        });
    }
};
UserController.selectUserByName = async (req, res) => {
    try {
        const { nome } = req.params;
        const user = await services_1.User.findByName(nome);
        return res.status(httpsStatus_1.default.OK).json(user);
    }
    catch (err) {
        return res.status(500).json({ message: 500, error: err.message });
    }
};
UserController.findByemail = async (req, res) => {
    try {
        console.log('controler chamado');
        const { email } = req.params;
        console.log(email);
        const user = await services_1.User.findByEmail(email);
        return res.status(httpsStatus_1.default.OK).json(user);
    }
    catch (err) {
        return res.status(500).json({ message: 500, error: err.message });
    }
};
UserController.listAllUsers = async (req, res) => {
    try {
        const allUsers = await services_1.User.findAll();
        return res.status(httpsStatus_1.default.OK).json(allUsers);
    }
    catch (err) {
        return res.status(500).json({ message: 500, error: err.message });
    }
};
UserController.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await services_1.User.deleteById(Number(id));
        return res.status(httpsStatus_1.default.OK).json({ message: `Usuario do ${id} desativado com sucesso` });
    }
    catch (err) {
        return res.status(500).json({ message: 500, error: err.message });
    }
};
