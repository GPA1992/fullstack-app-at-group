import Joi from 'joi';

const userSchema = Joi.object({
    nome: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(5).required(),
    avatar: Joi.string().required(),
    dataDeNascimento: Joi.date().required(),
  });

export default userSchema;