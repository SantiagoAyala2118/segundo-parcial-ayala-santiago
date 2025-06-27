import { DataTypes } from "sequelize";
import  {sequelize}  from "../config/database.js";

export const Movie = sequelize.define('Movie', {
    title: { type: DataTypes.STRING(), allowNull:false, unique: true },
    director: { type: DataTypes.STRING(), allowNull: false },
    duration: { type: DataTypes.INTEGER(), allowNull: false },
    genre: { type: DataTypes.STRING(), allowNull: false },
    description: { type: DataTypes.TEXT() }

});