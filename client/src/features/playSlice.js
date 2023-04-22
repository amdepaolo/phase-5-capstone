import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


const playSlice = createSlice({
    name: "play",
    initialState: { 
        player: null,
        questions:[] },
    reducers: {
        questionsCreated(state, action){
            state.questions = action.payload
        },

        questionAdded(state, action){
            state.questions.push(action.payload)
        },

        playerAdded(state, action){
            state.player = action.payload
        }
    }
});

export const {questionsCreated, questionAdded, playerAdded} = playSlice.actions
export default playSlice.reducer;