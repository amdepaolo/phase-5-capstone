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
        }
    },
    extraReducers: {
        [fetchGames.fulfilled](state, action){
            state = action.payload
            return state
        }
    }
});

export const {gamesAdded} = gamesSlice.actions
export default gamesSlice.reducer;

