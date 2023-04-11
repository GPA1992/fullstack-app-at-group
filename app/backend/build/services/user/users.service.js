"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../database/models/user.model"));
class User {
}
exports.default = User;
_a = User;
User.findByName = async (name) => {
    const findOne = await user_model_1.default.findOne({
        where: { name },
    });
    return findOne;
};
User.create = async (user) => {
    console.log(user);
    const create = await user_model_1.default.create(user);
    return create;
};
