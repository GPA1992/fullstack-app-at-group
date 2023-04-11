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
User.findByName = async (nome) => {
    const user = await (0, userRawQuerie_model_1.default)(nome);
    return user;
};
User.create = async (user) => {
    try {
        const create = await user_model_1.default.create(user);
        return create;
    }
    catch (err) {
        return err;
    }
};
