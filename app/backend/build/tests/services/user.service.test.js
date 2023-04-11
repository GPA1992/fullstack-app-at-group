"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const chai = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const user_model_1 = __importDefault(require("../../database/models/user.model"));
const users_service_1 = __importDefault(require("../../services/user/users.service"));
const index_1 = __importDefault(require("../../database/models/index"));
const userMock_1 = require("./mock/userMock");
const { expect } = chai;
chai.use(chai_http_1.default);
describe('User Service', () => {
    beforeEach(() => {
        sinon.stub(index_1.default, 'query');
    });
    afterEach(function () {
        sinon.restore();
    });
    it('findAll: deve listar todos os usuarios do banco de dados', async () => {
        const findAllStub = sinon.stub(user_model_1.default, 'findAll').resolves(userMock_1.allUsers);
        const result = await users_service_1.default.findAll();
        expect(findAllStub.calledOnce).to.be.true;
        expect(result).to.deep.equal(userMock_1.allUsers);
    });
    it('findByEmail: deve listar o usuario pelo email', async () => {
        const findAllStub = sinon.stub(user_model_1.default, 'findOne').resolves(userMock_1.user);
        const result = await users_service_1.default.findByEmail('gabriel@exemplo.com');
        expect(findAllStub.calledOnce).to.be.true;
        expect(result).to.deep.equal(userMock_1.user);
    });
    it('create: deve criar um novo usuário no banco de dados', async () => {
        const createStub = sinon.stub(user_model_1.default, 'create').resolves(userMock_1.userData);
        const result = await users_service_1.default.create(userMock_1.userData);
        expect(createStub.calledOnce).to.be.true;
        expect(result).to.deep.equal(userMock_1.userData);
    });
    it('update: deve atualizar as informações de um usuário existente no banco de dados', async () => {
        const nome = 'Usuário Existente';
        const updateStub = sinon.stub(user_model_1.default, 'update').resolves([1]);
        const result = await users_service_1.default.update(nome, userMock_1.userData);
        expect(updateStub.calledOnce).to.be.true;
        expect(result).to.deep.equal([1]);
    });
    it('deleteById: deve desativar o usuário com o id fornecido no banco de dados', async () => {
        const id = 1;
        const deactivateStub = sinon.stub(user_model_1.default, 'update').resolves([1]);
        const result = await users_service_1.default.deleteById(id);
        expect(deactivateStub.calledOnce).to.be.true;
        expect(result).to.deep.equal([1]);
    });
});
