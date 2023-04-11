"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoutes = exports.UserRoutes = void 0;
const user_routes_1 = __importDefault(require("./user.routes"));
exports.UserRoutes = user_routes_1.default;
const login_routes_1 = __importDefault(require("./login.routes"));
exports.LoginRoutes = login_routes_1.default;
