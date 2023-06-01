import {createSlice} from "@reduxjs/toolkit";
import {reset} from "./../actions";

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
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

export const {addMovie, removeMovie} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;