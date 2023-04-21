import usersReducer from "./usersSlice"
import gamesReducer from "./gamesSlice"
import playReducer from "./playSlice"
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        users: usersReducer,
        games: gamesReducer,
        play: playReducer
    }
});

export default store;

