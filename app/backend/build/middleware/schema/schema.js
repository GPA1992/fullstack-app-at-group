"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    nome: joi_1.default.string().min(4).required().messages({
        'string.base': 'O campo nome deve ser uma string',
        'string.min': 'O campo nome deve ter pelo menos {#limit} caracteres',
        'any.required': 'O campo nome é obrigatório',
    }),
    email: joi_1.default.string().email().required().messages({
        'string.base': 'O campo email deve ser uma string',
        'string.email': 'O campo email deve ser um email válido ex: nome@email.com',
        'any.required': 'O campo email é obrigatório',
    }),
    senha: joi_1.default.string().min(6).required().messages({
        'string.base': 'O campo senha deve ser uma string',
        'string.min': 'O campo senha deve ter pelo menos {#limit} caracteres',
        'any.required': 'O campo senha é obrigatório',
    }),
    avatar: joi_1.default.string().required().messages({
        'string.base': 'O campo avatar deve ser uma string',
        'any.required': 'O campo avatar é obrigatório',
    }),
    dataDeNascimento: joi_1.default.string().pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/)
        .required().messages({
        'string.base': 'O campo dataDeNascimento deve ser uma string',
        'string.pattern.base': 'O campo dataDeNascimento deve estar no formato DD/MM/AAAA',
        'any.required': 'O campo dataDeNascimento é obrigatório',
    }),
    ativo: joi_1.default.boolean().messages({
        'boolean.base': 'O campo ativo deve ser um booleano',
    }),
});
exports.default = userSchema;
