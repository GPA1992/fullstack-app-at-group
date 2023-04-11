
interface UserType {
    id: number;
    nome: string;
    email: string;
    senha: string;
    avatar: string;
    dataDeNascimento: Date;
    ativo: boolean;
}

interface UserTypeUpdate {
    nome?: string;
    email?: string;
    senha?: string;
    avatar?: string;
    dataDeNascimento?: Date;
    ativo?: boolean;
}

export { UserType, UserTypeUpdate};
