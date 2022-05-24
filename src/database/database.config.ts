import * as dotenv from 'dotenv';

import { IDatabaseConfig } from '../database/database.config.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: process.env.DATABASE_DIALECT,
    },
    // test: {
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_NAME_TEST,
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     dialect: process.env.DB_DIALECT,
    // },
    // production: {
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_NAME_PRODUCTION,
    //     host: process.env.DB_HOST,
    //     dialect: process.env.DB_DIALECT,
    // },
};