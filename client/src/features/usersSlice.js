import {createSlice} from "@reduxjs/toolkit"


const usersSlice = createSlice({
    name: "users",
    initialState: null,
    reducers: {
        userAdded(state, action){
            state = action.payload
            return state
        },
    }

})

export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;