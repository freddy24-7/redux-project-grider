import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from "./slices/SongsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/MoviesSlice";
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };