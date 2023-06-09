"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const selectByName = async (nome) => {
    try {
        const user = await index_1.default.query(`SELECT id, nome, email, avatar, data_de_nascimento, ativo
		 FROM Users WHERE nome = :nome`, {
            replacements: { nome },
            type: sequelize_1.QueryTypes.SELECT
        });
        return user;
    }
    catch (err) {
        return err;
    }
};
exports.default = selectByName;
