import { Router } from 'express';
import {
    createMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie
} from '../controllers/movie.controllers.js';

const movieRoutes = Router();

movieRoutes.post('/api/movies',createMovie);
movieRoutes.get('/api/movies',getAllMovies);
movieRoutes.get('/api/movies/:id',getOneMovie);
movieRoutes.put('/api/movies/:id',updateMovie);
movieRoutes.delete('/api/movies/:id',deleteMovie);

export default movieRoutes;
