import { QueryTypes } from 'sequelize';
import { UserType } from '../../types/types';
import db from './index';

const selectByName = async (nome: string): Promise<UserType | object[]> => {
	try{
		const user = await db.query<UserType>(`SELECT id, nome, email, avatar, data_de_nascimento, ativo
		 FROM Users WHERE nome = :nome`, {
			replacements: { nome },
			type: QueryTypes.SELECT
		});
		return user;
	} catch (err: any) {
		return err;
	}
};

export default selectByName;