import { QueryTypes } from 'sequelize';
import { UserType } from '../../types/types';
import db from './index';

const selectByName = async (nome: string): Promise<UserType | object[]> => {
	const user = await db.query('SELECT * FROM Users WHERE nome = :nome', {
		replacements: { nome },
		type: QueryTypes.SELECT
	});
	return user;
};

export default selectByName;