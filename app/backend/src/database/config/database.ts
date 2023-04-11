import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
	username: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '123456',
	database: process.env.DB_NAME || 'fullstack-app-at-group',
	host: process.env.MYSQL_HOST || 'db',
	port: Number(process.env.DB_PORT) || 3002,
	dialect: 'mysql',
};

export = config;
