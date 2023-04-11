import { QueryTypes } from 'sequelize';
import { UserType } from '../../types/types';
import db from './index';

const selectByName = async (nome: string): Promise<UserType | object[]> => {
	try{

		const user = await db.query('SELECT * FROM Users WHERE nome = :nome', {
			replacements: { nome },
			type: QueryTypes.SELECT
		});
		return user;
	} catch (err: any) {
		return err;
	}
};

export default selectByName;