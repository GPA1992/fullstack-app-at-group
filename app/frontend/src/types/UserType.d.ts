
interface UserType {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    avatar: string;
    dataDeNascimento: Date | string;
    ativo?: boolean;
}

export default UserType;