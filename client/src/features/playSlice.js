import {createSlice} from "@reduxjs/toolkit"


const playSlice = createSlice({
    name: "play",
    initialState: {
        host: {name: ""} ,
        user_player: {id: 0, votes:[]},
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
            if (state.questions.find(q => q.id === action.payload.id)){
                return
            } else state.questions.push(action.payload)
        },

        questionUpdated(state, action){
            const updatedQs = state.questions.map(q => {
                if (q.id === action.payload.id) return action.payload
                else return q
            })
            state.questions = updatedQs
        },

        voteUpdated(state, action){
            const existingVote = state.user_player.votes.find(vote => vote.question_id === action.payload.question_id)
            if (existingVote){
                existingVote.choice = action.payload.choice
            } else state.user_player.votes.push(action.payload)
        }
    }
});

export const {questionsCreated, questionAdded, playerAdded, questionUpdated, gameLoaded, voteUpdated} = playSlice.actions
export default playSlice.reducer;