import React, { useState } from 'react';
import axios from 'axios';
import { login } from '../../services/api';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

import './login.styles.sass';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setToken } = useUser();
	const navigate = useNavigate();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {      
			const response = await login(email, password);
			localStorage.setItem('email', JSON.stringify(email));
			axios.defaults.headers.common['Authorization'] = `Bearer ${response}`;
			setToken(response);
			navigate('/main');
		} catch (error) {
			console.error('Erro ao autenticar usuário', error);
		}
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Senha:</label>
					<input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
				</div>
				<button type="submit">Entrar</button>
			</form>
		</div>
	);
}
