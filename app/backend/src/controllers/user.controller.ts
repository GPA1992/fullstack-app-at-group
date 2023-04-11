import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { User } from '../services';

export default class Login {
    public static addNewUser = async (req: Request, res: Response) => {
        try {
            const { body } = req;

            const salt = bcrypt.genSaltSync(10);

                        const hash = bcrypt.hashSync(body.senha, salt);

            const newUser = {
                ...body,
                senha: hash
            };
            
            await User.create(newUser);

            return res
                .status(201)
                .json({ message: `User ${newUser.nome} criado com sucesso` });

        } catch (err: any) {
            return res.status(500).json({
                message: 500,
                error: err.message,
            });
        }
    };
}
