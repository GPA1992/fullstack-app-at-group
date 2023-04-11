const allUsers = [{ 
	'id': 1,
	'nome': 'Gabriel',
	'email': 'gabriel@exemplo.com',
	'senha': '123456',
	'avatar': 'avatar.png',
	'dataDeNascimento': new Date('10/04/1992'),
	'ativo': true,
},
{ 
	'id': 1,
	'nome': 'Joao',
	'email': 'joao@exemplo.com',
	'senha': '123456',
	'avatar': 'avatar.png',
	'dataDeNascimento': new Date('10/04/1992'),
	'ativo': true,
}];

const user = { 
	'id': 1,
	'nome': 'Gabriel',
	'email': 'gabriel@exemplo.com',
	'senha': '123456',
	'avatar': 'avatar.png',
	'dataDeNascimento': new Date('10/04/1992'),
	'ativo': true,
};

const userData = {
	'nome': 'Novo Usuário',
	'email': 'novo_usuario@teste.com',
	'senha': '123456',
	'avatar': 'https://www.example.com/avatar.png',
	'dataDeNascimento': new Date('10/04/1992'),
};

export {allUsers, user, userData};