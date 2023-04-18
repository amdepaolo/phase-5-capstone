import usersReducer from "./usersSlice"
import gamesReducer from "./gamesSlice"
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        users: usersReducer,
        games: gamesReducer
    }
});

export default store;

