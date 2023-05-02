import {createSlice} from "@reduxjs/toolkit"
import { gamesAdded } from "./gamesSlice"


const usersSlice = createSlice({
    name: "users",
    initialState: {
        id: null, 
        games: []},
    reducers: {
        userAdded(state, action){
            state = action.payload
            return state
        },
        userRemoved(state) {
            state = {id: null, games:[]}
            return state
        }
    },

    extraReducers: {
        [gamesAdded](state, action){
            state.games.push(action.payload)
        }
        
    }

})

export const { userAdded, userRemoved } = usersSlice.actions;
export default usersSlice.reducer;