import * as sinon from 'sinon';
import * as chai from 'chai';
import { QueryTypes } from 'sequelize';
import chaiHttp from 'chai-http';
import userModel from '../../database/models/user.model';
import selectByName from '../../database/models/userRawQuerie.model';
import User from '../../services/user/users.service';
import db from '../../database/models/index';
import{ allUsers, user, userData }from './mock/userMock';
import { UserType } from '../../types/types';

const { expect } = chai;
chai.use(chaiHttp);

describe('User Service', () => {
	beforeEach(() => {
		sinon.stub(db, 'query');
	});
	afterEach(function () {
		sinon.restore();
	});

	it('findAll: deve listar todos os usuarios do banco de dados', async () => {
		const findAllStub = sinon.stub(userModel, 'findAll').resolves(allUsers as userModel[]);
		const result = await User.findAll();
		expect(findAllStub.calledOnce).to.be.true;
		expect(result).to.deep.equal(allUsers);
	});

	it('findByEmail: deve listar o usuario pelo email', async () => {
		const findAllStub = sinon.stub(userModel, 'findOne').resolves(user as userModel);
		const result = await User.findByEmail('gabriel@exemplo.com');
		expect(findAllStub.calledOnce).to.be.true;
		expect(result).to.deep.equal(user);
	});

	it('create: deve criar um novo usuário no banco de dados', async () => {
		const createStub = sinon.stub(userModel, 'create').resolves(userData as userModel);
		const result = await User.create(userData as UserType);
		expect(createStub.calledOnce).to.be.true;
		expect(result).to.deep.equal(userData);
	});

	it('update: deve atualizar as informações de um usuário existente no banco de dados', async () => {
		const nome = 'Usuário Existente';
		const updateStub = sinon.stub(userModel, 'update').resolves([1]);
		const result = await User.update(nome, userData);
		expect(updateStub.calledOnce).to.be.true;
		expect(result).to.deep.equal([1]);
	});
	
	it('deleteById: deve desativar o usuário com o id fornecido no banco de dados', async () => {
		const id = 1;
		const deactivateStub = sinon.stub(userModel, 'update').resolves([1]);
		const result = await User.deleteById(id);
		expect(deactivateStub.calledOnce).to.be.true;
		expect(result).to.deep.equal([1]);
	});
	
});

