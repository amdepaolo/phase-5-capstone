import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchGames = createAsyncThunk("games/fetchGames", () => {
    return fetch("/games")
      .then( response => response.json())
  });

const gamesSlice = createSlice({
    name: "games",
    initialState: [],
    reducers: {
        gamesAdded(state, action){
            state.push(action.payload)
        },

        gamesRemoved(state, action){
            state.filter(game => game.id !== action.payload)
        },

        gamesUserLeft(state, action){
            state.forEach(game => {
                if(game.id === action.payload){
                    game.joined = false
                }else return game})
        },

        gameUserAdded(state, action){
            state.forEach(game => {
                if(game.id === action.payload.id){
                    game.joined = true
                }else return game})
        }
    },
    extraReducers: {
        [fetchGames.fulfilled](state, action){
            state = action.payload
            return state
        }
    }
});

export const {gamesAdded, gamesRemoved, gamesUserLeft, gameUserAdded} = gamesSlice.actions
export default gamesSlice.reducer;

