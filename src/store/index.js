import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
            //Here "state" is an array, see below rule in console.log
            console.log(state.length);
        },
        removeMovie(state, action) {
            //remove movie from array
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
});

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
            //Here "state" is an array, see below rule in console.log
            console.log(state.length);
        },
        removeSong(state, action) {
            //remove song from array
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
    }
});

//These console.logs indicates how the store and action creators work
console.log(store);
console.log(store.getState());
console.log(songsSlice.actions);

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong('song1'))

const endingState = store.getState();
console.log(JSON.stringify(endingState));

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
