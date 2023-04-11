"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../database/models/user.model"));
const userRawQuerie_model_1 = __importDefault(require("../../database/models/userRawQuerie.model"));
class User {
}
exports.default = User;
_a = User;
User.findAll = async () => {
    try {
        const user = await user_model_1.default.findAll({
            attributes: { exclude: ['senha'] }
        });
        return user;
    }
    catch (err) {
        return err;
    }
};
User.findByName = async (nome) => {
    try {
        const user = await (0, userRawQuerie_model_1.default)(nome);
        return user;
    }
    catch (err) {
        return err;
    }
};
User.findByEmail = async (email) => {
    try {
        console.log(email);
        const user = await user_model_1.default.findOne({ where: { email } });
        console.log(user);
        return user;
    }
    catch (err) {
        return err;
    }
};
User.create = async (user) => {
    try {
        const create = await user_model_1.default.create({
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            avatar: user.avatar,
            dataDeNascimento: user.dataDeNascimento
        });
        return create;
    }
    catch (err) {
        return err;
    }
};
User.update = async (nome, user) => {
    try {
        const update = await user_model_1.default.update({
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            avatar: user.avatar,
            dataDeNascimento: user.dataDeNascimento,
            ativo: user.ativo
        }, { where: {
                nome
            } });
        return update;
    }
    catch (err) {
        return err;
    }
};
User.deleteById = async (id) => {
    try {
        const deactivate = await user_model_1.default.update({
            ativo: false
        }, { where: {
                id
            } });
        return deactivate;
    }
    catch (err) {
        return err;
    }
};
