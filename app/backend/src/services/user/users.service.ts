import { UserType, UserTypeUpdate } from '../../types/types';
import userModel from '../../database/models/user.model';
import selectOneUser from '../../database/models/userRawQuerie.model';

export default class User {

	public static findAll= async (): Promise<UserType[] | null> => {
		try {
			const user = await userModel.findAll({
				attributes: { exclude: ['senha'] }
			});		
			return user;
		} catch (err: any) {
			return err;
		}
	};
	
	public static findByName = async (nome: string): Promise<UserType | object[]> => {
		try {
			const user = await selectOneUser(nome);
			return user;
		} catch (err: any) {
			return err;
		}
	};

	public static findByEmail = async (email: string): Promise<UserType | null> => {
		try {
			console.log(email);			
			const user = await userModel.findOne({where: { email }});
			console.log(user);
			
			return user;
		} catch (err: any) {
			return err;
		}
	};

	public static create = async (user: UserType): Promise<UserType | null> => {
		try {			
			const create: UserType | null = await userModel.create({
				nome: user.nome,
				email: user.email,
				senha: user.senha,
				avatar: user.avatar,
				dataDeNascimento: user.dataDeNascimento
			});			
			return create;
		} catch (err: any) {
			return err;
		}
	};

	public static update = async (nome: string, user: UserTypeUpdate)/* : Promise<UserType | null> */ => {
		try {			
			const update = await userModel.update({
				nome: user.nome,
				email: user.email,
				senha: user.senha,
				avatar: user.avatar,
				dataDeNascimento: user.dataDeNascimento,
				ativo: user.ativo
			}, { where: {
				nome
			}});			
			return update;
		} catch (err: any) {
			return err;
		}
	};

	public static deleteById = async (id: number) => {
		try {
			const deactivate = await userModel.update({
				ativo: false
			}, 
			{ where: {
				id
			}}); 
			return deactivate;

		} catch (err: any) {
			return err;
		}
	};
}
