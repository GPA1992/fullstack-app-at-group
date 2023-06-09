/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import http from '../utils/httpsStatus';
import { User } from '../services';

export default class UserController {
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

	public static findByemail = async (req: Request, res: Response) => {
		try {
			console.log('controler chamado');
			
			const { email } = req.params;
			console.log(email);			
			const user = await User.findByEmail(email);

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

	public static deleteUser = async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			await User.deleteById(Number(id));
			return res.status(http.OK).json( {message: `Usuario do ${id} desativado com sucesso`});
		} catch (err: any) {
			return res.status(500).json({message: 500, error: err.message});
		}
	};

	

}
