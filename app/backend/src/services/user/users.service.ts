import { UserType } from '../../types/types';
import userModel from '../../database/models/user.model';

export default class User {
    public static findByName = async (
        name: string
    ): Promise<UserType | null> => {
        const findOne: UserType | null = await userModel.findOne({
            where: { name },
        });
        return findOne;
    };

    public static create = async (user): Promise<UserType | null> => {
        console.log(user);
        
        const create = await userModel.create(user);
        return create;
    };
}
