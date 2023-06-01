import { configureStore, createSlice } from '@reduxjs/toolkit';

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
            // return state.filter((song) => song !== action.payload);
        }
    },
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

//These console.logs indicates how the store and action creators work
console.log(store);
console.log(songsSlice.actions);

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong('song1'))

const endingState = store.getState();
console.log(JSON.stringify(endingState));

export { store };
export const { addSong, removeSong } = songsSlice.actions;
