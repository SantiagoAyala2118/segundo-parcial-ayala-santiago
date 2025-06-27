import { Sequelize } from 'sequelize';
import { Movie } from '../models/movie.model.js'; 
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

export const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Autenticacion de la base de datos correcta');
        await sequelize.sync();
    } catch (err) {
        console.error('Hubo un error interno del servidor al intentar sincronizar con la base de datos');
    };
    
    await Movie.sync();
};