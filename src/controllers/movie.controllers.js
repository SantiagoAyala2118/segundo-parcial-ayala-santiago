import { Movie } from '../models/movie.model.js';

export const createMovie = async (req, res) => {
    try {
        const { title, director, duration, genre, description } = req.body;
        if(!title || !director || !duration || !genre){
            return res.status(400).json({
                message: 'No pueden haber campos nulos'
            });
        };

        if(title==="" || director ==="" || duration==="" || genre===""){
            return res.status(400).json({
                message: 'Los campos no pueden ser espacion vacíos'
            });
        };

        const existingMovie = await Movie.findOne({
            where: {
                title
            }
        });
        if(existingMovie){
            return res.status(400).json({
                message: 'No pueden haber peliculas repetidas'
            });
        };

        if(typeof title !== "string"){
            return res.status(400).json({
                message: 'El titulo debe ser un valor string'
            });
        };

        if(typeof director != "string" || typeof genre != "string" || typeof description != 'string'){
            return res.status(400).json({
                message: 'Todos los campos excepto duration deben ser de tipo string (character)'
            })
        }


        const movie = await Movie.create({
            title,
            director,
            duration,
            genre,
            description
        });
        res.status(201).json({
            message: 'Peliula creada con exito',
            movie
        });

    } catch (err) {
        console.error('Error interno del servidor al intentar crear un personaje')
        return res.status(500).json({
            message: 'Error del servidor'
        });
    };
};



export const getAllMoviesMovie = async (req, res) => {
    try {
        const movie = Movie.findAll(req.body);
        if(movie){
            return res.status(200).json({
                message: 'Peliculas encontradas',
                movie
            });
        };
        return res.status(404).json({
            message: 'No hay peliculas en la base de datos'
        });
    } catch (err) {
        console.error('Error interno del servidor al intentar traer los personajes')
        return res.status(500).json({
            message: 'Error del servidor'
        });
    };
};



export const getOneMovieMovie = async (req, res) => {
    try {
        
    } catch (err) {
        console.error('Error interno del servidor al intentar traer un personaje')
        return res.status(500).json({
            message: 'Error del servidor'
        });
    };
};



export const updateMovie = async (req, res) => {
    try {
        
    } catch (err) {
        console.error('Error interno del servidor al intentar actualizar un personaje')
        return res.status(500).json({
            message: 'Error del servidor'
        });
    };
};



export const deleteMovie = async (req, res) => {
    try {
        
    } catch (err) {
        console.error('Error interno del servidor al intentar borrar un personaje')
        return res.status(500).json({
            message: 'Error del servidor'
        });
    };
};