import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../services';
import * as jwt from 'jsonwebtoken';
import Joi from 'joi';

const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'jwt_secret';

const incorrectMsg = 'Incorrect email or password';

class Validate {
    public static createUserfieldValidate = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            console.log("FUI CHAMADO");
            
            const schema = Joi.object({
              nome: Joi.string().min(4).required(),
              email: Joi.string().email().required(),
              senha: Joi.string().min(5).required(),
              avatar: Joi.string().required(),
              birthDate: Joi.date().required(),
            });
      
            const validate = await schema.validateAsync(req.body);
            console.log(validate);         
      

            return next();
          } catch (err: any) {
            return res.status(400).json({ message: err.message });
          }
    };

    public static loginFieldHandle = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { name, password } = req.body;
            const fieldsRequire = name && password;

            if (!fieldsRequire) {
                return res
                    .status(400)
                    .json({ message: 'All fields must be filled' });
            }
            return next();
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    };

    public static fieldValidate = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { name, password } = req.body;
            const userData = await UserService.findByName(name);
            if (!userData) {
                return res.status(401).json({ message: incorrectMsg });
            }

            const checkPassword = bcrypt.compareSync(
                password,
                userData.password
            );

            if (checkPassword === false) {
                return res.status(401).json({ message: incorrectMsg });
            }

            return next();
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    };
}
export default Validate;
