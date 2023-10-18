import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../models";

// Add a new movie
export const addMovie = createAsyncThunk(
  'movies/addMovie',
  async (movie:Movie) => {
    const response = await axios.post('http://localhost:3005/movies', movie);
    return response.data;
  }
);

// Delete a movie by ID
export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (movieId) => {
    await axios.delete(`http://localhost:3005/movies/${movieId}`);
    return movieId;
  }
);

// Delete all movies
export const deleteAllMovies = createAsyncThunk(
  'movies/deleteAllMovies',
  async () => {
    const response = await axios.get('http://localhost:3005/movies');
    const movies = response.data;

    // Send delete requests for each movie
    const deletePromises = movies.map((movie: Movie) => axios.delete(`http://localhost:3005/movies/${movie.id}`));

    // Wait for all delete requests to complete
    await Promise.all(deletePromises);
  }
);


