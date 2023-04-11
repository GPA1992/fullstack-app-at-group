import React, { useState } from 'react';
import Header from '../../components/header/header';
import { createUser} from '../../services/api';
import UserType from '../../types/UserType';
import './cadastro.styles.sass';

export default function Cadastro(): JSX.Element {
	const [nome, setNome] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [senha, setSenha] = useState<string>('');
	const [avatar, setAvatar] = useState<string>('');
	const [dataDeNascimento, setDataDeNascimento] = useState<string>('');
	const [ativo, setAtivo] = useState<boolean>(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const userData: UserType = {
			nome,
			email,
			senha,
			avatar,
			dataDeNascimento,
			ativo,
		};
		console.log(dataDeNascimento);
		const token = localStorage.getItem('user-data');		
		await createUser(userData, token as string);
	};

	return (
		<div>
			<Header />
			<div className='cadastro-box'>
				<h1>Cadastro de usuário</h1>
				<form onSubmit={handleSubmit}>
					<label>
            Nome:
						<input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
					</label>
					<br />
					<label>
            Email:
						<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>
					<br />
					<label>
            Senha:
						<input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />
					</label>
					<br />
					<label>
            Avatar:
						<input type='text' value={avatar} onChange={(e) => setAvatar(e.target.value)} />
					</label>
					<br />
					<label>
            Data de Nascimento:
						<input
							type='text'
							value={dataDeNascimento}
							onChange={(e) => setDataDeNascimento(e.target.value)}
						/>
					</label>
					<br />
					<label>
            Ativo:
						<input type='checkbox' checked={ativo} onChange={(e) => setAtivo(e.target.checked)} />
					</label>
					<br />
					<button type='submit'>Cadastrar</button>
				</form>
			</div>
		</div>
	);
}
