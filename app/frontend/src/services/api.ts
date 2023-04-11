import axios from 'axios';
import UserType from '../types/UserType';

const api = axios.create({
	baseURL: 'http://localhost:3001',
});

export const requestData = async (endpoint: string) => {
	const { data } = await api.get(endpoint);
	return data;
};

export const login = async (email: string, password: string) => {
	try {

		const response = await api.post('/login', { email, senha: password });
		return response.data;
	} catch (error) {
		throw new Error('Não foi possível fazer login');
	}
};

export const getUserByEmail = async (email: string) => {
	try {
		const response = await api.get(`user/email/${email}`, );
		console.log(response.data);		
		return response.data;
	} catch (error) {
		console.log();
		
	}
};

export const createUser = async (user: UserType, token: string) => {
	try {
		const response = await api.post('user', { 
			'nome': user.nome,
			'email': user.email,
			'senha': user.senha,
			'avatar': user.avatar,
			'dataDeNascimento': user.dataDeNascimento,
		}, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		console.log(response.data);		
		return response.data;
	} catch (error) {
		console.log();
		
	}
};

export default api;
