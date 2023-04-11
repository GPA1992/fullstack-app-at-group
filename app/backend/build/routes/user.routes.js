"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_validate_1 = __importDefault(require("../middleware/user.validate"));
const router = express_1.default.Router();
router.get('/:nome', /* AuthMiddleware.tokenHandle, */ user_controller_1.default.selectUserByName);
router.get('/email/:email', user_controller_1.default.findByemail);
router.get('/', /* AuthMiddleware.tokenHandle, */ user_controller_1.default.listAllUsers);
router.post('/', 
/* AuthMiddleware.tokenHandle, */
user_validate_1.default.createUserfieldValidate, user_validate_1.default.checkIfUserAlreadyExists, user_validate_1.default.checkIfEmailAlreadyExists, user_controller_1.default.addNewUser);
router.put('/:nome', 
/* AuthMiddleware.tokenHandle, */
user_validate_1.default.createUserfieldValidate, user_validate_1.default.checkIfUserExists, user_controller_1.default.userUpdate);
router.delete('/:id', /* AuthMiddleware.tokenHandle */ user_controller_1.default.deleteUser);
exports.default = router;
