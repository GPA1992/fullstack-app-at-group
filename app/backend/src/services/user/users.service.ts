import { UserType } from '../../types/types';
import userModel from '../../database/models/user.model';
import selectOneUser from '../../database/models/userRawQuerie.model';

export default class User {

	public static findAll= async (): Promise<UserType[] | null> => {
		try {
			const user = await userModel.findAll();		
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

	public static create = async (user: UserType): Promise<UserType | null> => {
		try {			
			const create: UserType | null = await userModel.create({
				nome: user.nome,
				email: user.email,
				senha: user.senha,
				avatar: user.avatar,
				dataDeNascimento: user.dataDeNascimento
			});
			console.log(`func create: ${create} `);
			
			return create;
		} catch (err: any) {
			return err;
		}
	};
}
