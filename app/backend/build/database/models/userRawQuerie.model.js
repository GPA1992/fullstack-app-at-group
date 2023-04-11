"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
async function selectOneUser(nome) {
    const user = await index_1.default.query(`SELECT * FROM 'users' WHERE 'nome' = ${nome}`, {
        type: sequelize_1.QueryTypes.SELECT
    });
    return user;
}
exports.default = selectOneUser;
