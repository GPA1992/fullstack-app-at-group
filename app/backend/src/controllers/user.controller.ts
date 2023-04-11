/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import http from '../utils/httpsStatus';
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
			
			const response = { message: `User ${newUser.nome} criado com sucesso` };
			return res.status(http.CREATED).json(response);

		} catch (err: any) {
			return res.status(500).json({
				message: 500,
				error: err.message,
			});
		}
	};

	public static userUpdate = async (req: Request, res: Response) => {
		try {
			const { body } = req;
			const { nome } = req.params;
			const salt = bcrypt.genSaltSync(10);
			const hash = bcrypt.hashSync(body.senha, salt);
			const newUser = {
				...body,
				senha: hash
			};

			await User.update(nome, newUser);
			
			const response = { message: 'Usuario atualizado com sucesso'};
			return res.status(http.CREATED).json(response);

		} catch (err: any) {
			return res.status(500).json({
				message: 500,
				error: err.message,
			});
		}
	};

	public static selectUserByName = async (req: Request, res: Response) => {
		try {
			const { nome } = req.params;			
			const user = await User.findByName(nome);
			return res.status(http.OK).json(user);
		} catch (err: any) {
			return res.status(500).json({message: 500, error: err.message});
		}
	};

	public static listAllUsers = async (req: Request, res: Response) => {
		try {
			const allUsers = await User.findAll();
			return res.status(http.OK).json(allUsers);
		} catch (err: any) {
			return res.status(500).json({message: 500, error: err.message});
		}
	};

}
