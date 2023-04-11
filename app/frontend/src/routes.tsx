import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Main from './pages/main';
import GlobalContextProvider from './context/GlobalContextProvider';
import useUser from './hooks/useUser';
import Login from './components/login/login';
import Cadastro from './pages/cadastro/cadastro';

type Props = {
    redirectTo: string;
};

function ProtectedRoutes({ redirectTo }: Props) {
	const { token } = useUser();

	return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
	return (
		<GlobalContextProvider>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<ProtectedRoutes redirectTo="/" />}>
					<Route path="/main" element={<Main />} />
					<Route path="/cadastro" element={<Cadastro />} />
				</Route>
				<Route path="*" element={<h1> 404 - Not found </h1>} />
			</Routes>
		</GlobalContextProvider>
	);
}
