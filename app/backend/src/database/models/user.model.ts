import { DataTypes, Model } from 'sequelize';
import db from './index';

class User extends Model {
	public id!: number;
	public nome!: string;
	public email!: string;
	public senha!: string;
	public avatar!: string;
	public dataDeNascimento!: Date;
	public ativo!: boolean;
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	senha: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	avatar: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	dataDeNascimento: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	ativo: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true
	},
}, {
	underscored: true,
	sequelize: db,
	timestamps: false,
	tableName: 'Users',
});

export default User;
