import React, { useEffect, useState } from 'react';
import { getUserByEmail } from '../../services/api';
import UserType from '../../types/UserType';
import './header.styles.sass';


export default function Header() {
	const [user, setUser] = useState<UserType>();
	const [daysUntilBirthday, setDaysUntilBirthday] = useState(0);
	useEffect(() => {
		async function fetchUser() {
			const email = localStorage.getItem('email')?.replace(/"/g, '');
			const userResponse = await getUserByEmail(email as string);
			setUser(userResponse);
			const hoje = new Date();
			const date = new Date(userResponse.dataDeNascimento);
			const year = hoje.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate()+ 1;
			const formatDate = `${year}-${month}-${day}`;
			console.log(formatDate);
			
			const dataAlvo = new Date(formatDate);
			const diferencaEmMs = dataAlvo.getTime() - hoje.getTime();
			const diasFaltando = Math.ceil(diferencaEmMs / (1000 * 60 * 60 * 24));
			setDaysUntilBirthday(diasFaltando);
		}
		fetchUser();
	}, []);

	
	return (
		<header>
			
			<div className="birthday">
				{daysUntilBirthday === 0 ? (
					<span>Hoje é seu aniversário!</span>
				) : (
					<span>Faltam {daysUntilBirthday} dias para o seu aniversário</span>
				)}
			</div>
			<div className="avatar">
				<img src={user?.avatar} alt="Avatar" />
			</div>
		</header>
	);
}