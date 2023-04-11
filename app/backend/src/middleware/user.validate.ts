/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { User } from '../services';
import{ userSchema, loginSchema } from './schema/schema';
import https from '../utils/httpsStatus';
import { UserType } from '../types/types';


class Validate {
	public static createUserfieldValidate = async (req: Request, res: Response, next: NextFunction) => {
		try {
			await userSchema.validateAsync(req.body);   
		
			return next();
		} catch (err: any) {
			return res.status(https.UNPROCESSABLE_ENTITY).json({ message: err.message });
		}
	};

	public static checkIfUserExists = async  (req: Request, res: Response, next: NextFunction) => {
		try {
			const { nome } = req.params;
			const checkIfUserExists: UserType | object[] = await User.findByName(nome as string);

			if (Array.isArray(checkIfUserExists) && checkIfUserExists.length === 0) {
				return res.status(https.NOT_FOUND).json({ message: 'Usuario não existe' });
			}
			return next();
		} catch (err: any) {
			return res.status(https.UNPROCESSABLE_ENTITY).json({ message: err.message });
		}
	};

	public static checkIfEmailExists = async  (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email } = req.body;
			const checkIfUserExists: UserType | null= await User.findByEmail(email as string);

			if (!checkIfUserExists) {
				return res.status(https.NOT_FOUND).json({ message: 'Email não cadastrado' });
			}
			return next();
		} catch (err: any) {
			return res.status(https.UNPROCESSABLE_ENTITY).json({ message: err.message });
		}
	};

	public static checkIfEmailAlreadyExists = async  (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email } = req.body;
			const checkIfUserExists: UserType | null= await User.findByEmail(email as string);

			if (checkIfUserExists) {
				return res.status(https.CONFLICT).json({ message: 'Email ja esta em uso' });
			}
			return next();
		} catch (err: any) {
			return res.status(https.UNPROCESSABLE_ENTITY).json({ message: err.message });
		}
	};
	
	public static checkIfUserAlreadyExists = async  (req: Request, res: Response, next: NextFunction) => {
		try {
			const { nome } = req.body;
			const checkIfUserAlreadyExists: UserType | object[] = await User.findByName(nome as string);
			console.log(checkIfUserAlreadyExists);
			
			
			if (Array.isArray(checkIfUserAlreadyExists) && checkIfUserAlreadyExists.length > 0) {
				return res.status(https.CONFLICT).json({ message: 'Usuario ja existe' });
			}
			return next();
		} catch (err: any) {
			return res.status(https.UNPROCESSABLE_ENTITY).json({ message: err.message });
		}
	};
	
	public static loginFieldHandle = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {		
			await loginSchema.validateAsync(req.body); 
			return next();
		} catch (err: any) {
			return res.status(400).json({ message: err.message });
		}
	};
}
export default Validate;
