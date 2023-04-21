import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


const playSlice = createSlice({
    name: "play",
    initialState: { 
        player: null,
        questions:[] },
    reducers: {
        questionsAdded(state, action){
            state.questions = action.payload
        },

        playerAdded(state, action){
            state.player = action.payload
        }
    }
});

export const {questionsAdded, playerAdded} = playSlice.actions
export default playSlice.reducer;