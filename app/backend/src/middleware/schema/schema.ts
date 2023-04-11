import Joi from 'joi';

const userSchema = Joi.object({
	nome: Joi.string().min(4).required().messages({
		'string.base': 'O campo nome deve ser uma string',
		'string.min': 'O campo nome deve ter pelo menos {#limit} caracteres',
		'any.required': 'O campo nome é obrigatório',
	}),
	email: Joi.string().email().required().messages({
		'string.base': 'O campo email deve ser uma string',
		'string.email': 'O campo email deve ser um email válido ex: nome@email.com',
		'any.required': 'O campo email é obrigatório',
	}),
	senha: Joi.string().min(6).required().messages({
		'string.base': 'O campo senha deve ser uma string',
		'string.min': 'O campo senha deve ter pelo menos {#limit} caracteres',
		'any.required': 'O campo senha é obrigatório',
	}),
	avatar: Joi.string().required().messages({
		'string.base': 'O campo avatar deve ser uma string',
		'any.required': 'O campo avatar é obrigatório',
	}),
	dataDeNascimento: Joi.string().pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/)
		.required().messages({
			'string.base': 'O campo dataDeNascimento deve ser uma string',
			'string.pattern.base': 'O campo dataDeNascimento deve estar no formato DD/MM/AAAA',
			'any.required': 'O campo dataDeNascimento é obrigatório',
		}),
	ativo: Joi.boolean().messages({
		'boolean.base': 'O campo ativo deve ser um booleano',
	}),
});

export default userSchema;