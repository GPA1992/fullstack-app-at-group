"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    nome: joi_1.default.string().min(4).required().message('O campo nome deve ser peenchido e o nome deve ter mais de 4 letras'),
    email: joi_1.default.string().email().required(),
    senha: joi_1.default.string().min(5).required(),
    avatar: joi_1.default.string().required(),
    dataDeNascimento: joi_1.default.string().pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/).required(),
});
exports.default = userSchema;
