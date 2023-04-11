/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from '../../types/types';
import userModel from '../../database/models/user.model';
import selectOneUser from '../../database/models/userRawQuerie.model';

export default class User {
	public static findByName = async (nome: string)/* : Promise<UserType | null> */ => {
		try {

			const user = await selectOneUser(nome);		
			return user;
		} catch (err: any) {
			return err;
		}
	};

	public static create = async (user): Promise<UserType | null> => {
		try {

			const create: UserType | null = await userModel.create(user);
			return create;
		} catch (err: any) {
			return err;
		}
	};
}
