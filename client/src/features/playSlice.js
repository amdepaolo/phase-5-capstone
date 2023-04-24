import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


const playSlice = createSlice({
    name: "play",
    initialState: { 
        players: null,
        questions:[] },
    reducers: {
        gameLoaded(state, action){
            state = action.payload
            return state
        },

        questionsCreated(state, action){
            state.questions = action.payload
        },

        questionAdded(state, action){
            state.questions.push(action.payload)
        },

        questionUpdated(state, action){
            const updatedQs = state.questions.map(q => {
                if (q.id === action.payload.id) return action.payload
                else return q
            })
            state.questions = updatedQs
        },

        playerAdded(state, action){
            state.player = action.payload
        }
    }
});

export const {questionsCreated, questionAdded, playerAdded, questionUpdated, gameLoaded} = playSlice.actions
export default playSlice.reducer;