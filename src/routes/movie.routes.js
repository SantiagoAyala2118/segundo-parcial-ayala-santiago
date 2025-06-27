import { Router } from 'sequelize'
import {
    createMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie
} from '../controllers/movie.controllers.js';

const movieRoutes = Router();

movieRoutes.post('/api/movie',createMovie);
movieRoutes.get('/api/movie',getAllMovies);
movieRoutes.get('/api/movie/:id',getOneMovie);
movieRoutes.put('/api/movie/:id',updateMovie);
movieRoutes.delete('/api/movie/:id',deleteMovie);

export default movieRoutes;
