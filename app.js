import express from 'express';
import movieRoutes from './src/routes/movie.routes.js';
import dotenv from 'dotenv';
import  {initDB}  from './src/config/database.js';
dotenv.config();
initDB();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//Rutas
app.use('/',movieRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});