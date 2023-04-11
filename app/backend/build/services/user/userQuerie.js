"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const users = await sequelize_1.default.query('SELECT * FROM `users` WHERE `name` = :name', {
    replacements: { name: 'nome_do_usuario' },
    type: sequelize_1.default.QueryTypes.SELECT
});
