import {createSlice} from "@reduxjs/toolkit"
import { gameUserAdded, gamesAdded, gamesUserLeft } from "./gamesSlice"


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
        },

        [gameUserAdded](state, action){
            state.games.push(action.payload)
        },

        [gamesUserLeft](state, action){
            const newGames = state.games.filter(game => game.id !== action.payload)
            state.games = newGames
        }
        
    }

})

export const { userAdded, userRemoved, userGameAdded } = usersSlice.actions;
export default usersSlice.reducer;