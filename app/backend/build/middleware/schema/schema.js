"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    nome: joi_1.default.string().min(4).required(),
    email: joi_1.default.string().email().required(),
    senha: joi_1.default.string().min(5).required(),
    avatar: joi_1.default.string().required(),
    dataDeNascimento: joi_1.default.date().required(),
});
exports.default = userSchema;
